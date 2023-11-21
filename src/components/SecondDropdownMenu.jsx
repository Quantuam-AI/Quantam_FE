import LicensePlate from "./LicensePlate";
import { useState } from "react";

const SecondDropdownMenu = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div>
      <label htmlFor="secondMenu">두 번째 메뉴 선택: </label>
      <select
        id="secondMenu"
        onChange={handleOptionChange}
        value={selectedOption}
      >
        <option value="">-- 선택하세요 --</option>
        <option value="licensePlate">자동차 번호판</option>
        {/* 다른 메뉴 항목들을 필요에 따라 추가할 수 있습니다. */}
      </select>

      {selectedOption === "licensePlate" && <LicensePlate />}
      {/* 다른 메뉴 항목들에 대한 조건문을 추가할 수 있습니다. */}
    </div>
  );
};

export default SecondDropdownMenu;