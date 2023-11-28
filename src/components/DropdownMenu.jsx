import { useState } from "react";
import styled from "styled-components";
import SecondDropdownMenu from "./SecondDropdownMenu";

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [secondMenuEnabled, setSecondMenuEnabled] = useState(false);

  const handleOptionChange = (selectedValue) => {
    setSelectedOption(selectedValue);
    setSecondMenuEnabled(selectedValue === "vehicleImage");
  };

  return (
    <MenuContainer>
      <Divider />
      <CategoryText>카테고리를 선택해주세요</CategoryText>
      <OptionsContainer>
        <OptionButton
          onClick={() => handleOptionChange("vehicleImage")}
          isSelected={selectedOption === "vehicleImage"}
        >
          차량 이미지
        </OptionButton>
        <OptionButton onClick={() => {}} disabled>
          자연 풍경 사진
        </OptionButton>
        <OptionButton onClick={() => {}} disabled>
          도시 스케이프
        </OptionButton>
        <OptionButton onClick={() => {}} disabled>
          야생 동물
        </OptionButton>
        <OptionButton onClick={() => {}} disabled>
          인물 사진
        </OptionButton>
      </OptionsContainer>
      {selectedOption === "vehicleImage" && secondMenuEnabled && (
        <SecondDropdownMenu
          onSelect={(value) => console.log(`Selected: ${value}`)}
        />
      )}
    </MenuContainer>
  );
};

const Divider = styled.hr`
  margin-top: 20px;
  border: 0;
  height: 1px;
  background-color: #ccc;
  width: 100%;
`;

const CategoryText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  text-align: left;
`;

const MenuContainer = styled.div`
  margin-top: 15px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const OptionButton = styled.button`
  padding: 8px 20px;
  border: 1px solid #ccc;
  border-radius: 25px;
  background-color: ${({ isSelected }) => (isSelected ? "#0078FE" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #0056b3;
    color: white;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
  }

  &:disabled {
    background-color: #e0e0e0;
    color: #a0a0a0;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export default DropdownMenu;
