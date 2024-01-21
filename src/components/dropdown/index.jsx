import React, { useState } from "react";
import Feather from 'react-native-vector-icons/Feather';
import { DropdownContainer, DropdownButton, DropdownText, DropdownOptions, DropdownOptionText } from './styles';
import { LightTheme } from "../../styles/themes/light";

const Dropdown = ({ options, setOptions }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSelect = (selectedOption) => {
    setOptions(options.map((option) => ({
      ...option,
      select: option.name === selectedOption.name
    })));
    setDropdownVisible(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onPress={() => setDropdownVisible(!dropdownVisible)}>
        <DropdownText>{options.find((option) => option.select)?.name || 'Selecione o tipo'}</DropdownText>
        <Feather size={20} color={LightTheme.colors.text} name="chevron-down"/>
      </DropdownButton>

      {dropdownVisible && (
        <DropdownOptions>
          {options.map((option, index) => (
            <DropdownOptionText key={index} onPress={() => handleSelect(option)} select={option.select}>
              {option.name}
            </DropdownOptionText>
          ))}
        </DropdownOptions>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;