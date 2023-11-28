import LicencePlate from "./LicencePlate";
import styled from "styled-components";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const SecondDropdownMenu = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <MenuContainer>
      <Divider />
      <CategoryText>소분류를 선택해주세요</CategoryText>
      <OptionsContainer>
        <OptionButton
          onClick={() => handleOptionChange("licensePlate")}
          isSelected={selectedOption === "licensePlate"}
        >
          자동차 번호판
        </OptionButton>
        <OptionButton
          onClick={() => handleOptionChange("vehicleModel")}
          isSelected={selectedOption === "vehicleModel"}
          disabled
        >
          차량 모델
        </OptionButton>
        <OptionButton
          onClick={() => handleOptionChange("vehicleColor")}
          isSelected={selectedOption === "vehicleColor"}
          disabled
        >
          차량 색상
        </OptionButton>
        <OptionButton
          onClick={() => handleOptionChange("vehicleDamage")}
          isSelected={selectedOption === "vehicleDamage"}
          disabled
        >
          차량 손상도
        </OptionButton>
      </OptionsContainer>

      {selectedOption === "licensePlate" && <LicencePlate />}
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
export default SecondDropdownMenu;
