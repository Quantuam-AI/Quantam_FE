import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LicencePlate = () => {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]);
  const [memberName, setMemberName] = useState(""); // memberName 상태 추가
  const id = useSelector((state) => state.signin.id);
  console.log("라이선스 플레이트", id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://101.101.211.67:8080/user/${id}`);

        // console.log(response.data.data.memberName);
        setMemberName(response.data.data.memberName);
        return response.data;
      } catch (error) {
        console.error("데이터를 불러오는데 실패하였습니다.", error);
      }
    };

    fetchData(); // 비동기 함수를 호출합니다.
  }, [id]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages(imageUrls);
    // console.log("멤버이름", memberName);
  };

  const uploadImages = async () => {

    const formData = new FormData();
    formData.append("memberName", memberName); // memberName 추가

    const files = document.querySelector('input[type="file"]').files;
    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }

    const apiUrl = "http://101.101.211.67:8080/image"; // API 엔드포인트

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {},
        body: formData,
      });

      if (response.ok) {
        alert("업로드가 성공적으로 완료되었습니다.");
        navigate("/");
      } else {
        alert("업로드 실패");
      }
    } catch (error) {
      alert("업로드 중 에러 발생:", error);
    }
  };

  return (
    <div>

      <FileInput
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      <StyledButton onClick={uploadImages}>이미지 업로드</StyledButton>
      <ImageContainer>
        {selectedImages.map((image, index) => (
          <StyledImage key={index} src={image} alt={`Selected ${index}`} />
        ))}
      </ImageContainer>
    </div>
  );
};



const FileInput = styled.input`
  margin: 20px 0;
`;

const StyledButton = styled.button`
  margin-top: 50px;
  padding: 12px 24px;
  background-color: #0078fe;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledImage = styled.img`
  max-width: 80%;
  height: auto;
  display: block;
  margin: 10px;
`;

export default LicencePlate;
