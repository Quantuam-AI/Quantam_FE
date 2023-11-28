import styled from "styled-components";
import DropdownMenu from "../components/DropdownMenu";

const ImagePage = () => {
  return (
    <PageContainer>
      <Content>
        <Title>이미지 데이터 저장</Title>
        <Description>
          어떤 이미지를 저장할지 카테고리를 선택하고, 카메라를 열어 이미지를
          촬영한 후 전처리 및 증강을 거쳐 저장합니다.
        </Description>
        <DropdownMenu />
      </Content>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 20px;
`;

const Content = styled.div`
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

export default ImagePage;
