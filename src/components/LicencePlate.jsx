import { useState } from "react";
import styled from "styled-components";

const LicencePlate = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [memberName, setMemberName] = useState(""); // memberName 상태 추가

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages(imageUrls);
  };

  const uploadImages = async () => {
    if (selectedImages.length === 0) {
      alert("이미지를 선택해주세요.");
      return;
    }

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
      } else {
        alert("업로드 실패");
      }
    } catch (error) {
      alert("업로드 중 에러 발생:", error);
    }
  };

  return (
    <div>
      <StyledInput
        type="text"
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
        placeholder="이름 입력"
      />
      <FileInput
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      <button onClick={uploadImages}>이미지 업로드</button>
      <ImageContainer>
        {selectedImages.map((image, index) => (
          <StyledImage key={index} src={image} alt={`Selected ${index}`} />
        ))}
      </ImageContainer>
    </div>
  );
};

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 0;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #0078fe;
    box-shadow: 0px 0px 8px rgba(0, 120, 254, 0.2);
  }
`;

const FileInput = styled.input`
  margin: 20px 0;
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
