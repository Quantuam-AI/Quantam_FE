import { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import cameraButton from "../assets/shutter-camera.png";
import { AiOutlineClose } from "react-icons/ai";

const LicencePlate = () => {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 사용자의 카메라에 접근하여 스트림을 가져옴
  useEffect(() => {
    const enableStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        setStream(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error(err);
      }
    };

    enableStream();
    // 컴포넌트가 언마운트될 때 스트림을 종료함
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  // 사진 촬영
  const captureImage = () => {
    if (videoRef.current) {
      let canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      let ctx = canvas.getContext("2d");
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      // 캔버스에서 이미지를 blob으로 변환
      canvas.toBlob((blob) => {
        const imageFile = new File([blob], `image_${Date.now()}.jpeg`, {
          type: "image/jpeg",
        });
        // upload api
        // console.log("촬영 성공 " + imageFile);
      }, "image/jpeg");
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <OpenCameraButton onClick={toggleModal}>지금 촬영하기</OpenCameraButton>
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <CloseButtonWrapper>
              <CloseButton onClick={toggleModal}>
                <AiOutlineClose size={24} />
              </CloseButton>
            </CloseButtonWrapper>
            <VideoWrapper>
              <VideoFeed autoPlay playsInline ref={videoRef} />
            </VideoWrapper>
            <CaptureButton
              src={cameraButton}
              alt="Camera Button"
              onClick={captureImage}
              onTouchEnd={captureImage}
            />
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const breathingAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 120, 254, 0.2);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 10px 0 rgba(0, 120, 254, 0.4);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 120, 254, 0.2);
  }
`;

const OpenCameraButton = styled.button`
  padding: 16px 0px;
  width: 100%;
  margin: 20px 0;
  border: none;
  border-radius: 10px;
  background-color: #0078fe;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 120, 254, 0.2);
  transition: background-color 0.3s, box-shadow 0.3s;
  animation: ${breathingAnimation} 4s ease-in-out infinite;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 80%;
  height: 90%;
  padding: 20px;
  border-radius: 5px;
`;

const VideoWrapper = styled.div`
  width: 80%;
  height: 80%;
  overflow: hidden;
`;

const CaptureButton = styled.img`
  margin-top: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const VideoFeed = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 10px;
  border: none;
  background: none; // 배경색 제거
  cursor: pointer;
`;

export default LicencePlate;
