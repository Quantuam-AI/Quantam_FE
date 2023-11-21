import SecondDropdownMenu from "./SecondDropdownMenu";
import { useState } from "react";

const DropdownMenu = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [secondMenuEnabled, setSecondMenuEnabled] = useState(false);
  
    const handleOptionChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedOption(selectedValue);
  
      
      setSecondMenuEnabled(selectedValue === 'vehicleImage');
    };
  
    return (
      <div>
        <label htmlFor="menu">메뉴 선택: </label>
        <select id="menu" onChange={handleOptionChange} value={selectedOption}>
          <option value="">-- 선택하세요 --</option>
          <option value="vehicleImage">차량 이미지</option>
          
        </select>
  
        {selectedOption === 'vehicleImage' && secondMenuEnabled && (
          <SecondDropdownMenu onSelect={(value) => console.log(`Selected: ${value}`)} />
        )}
       
      </div>
    );
  };
  

  export default DropdownMenu;