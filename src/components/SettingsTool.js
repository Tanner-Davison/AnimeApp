import React from 'react'
import styled from 'styled-components';
import SettingsIcon from "@mui/icons-material/Settings";

const SettingsTool = ({onSettingsClick}) => {
  return (
    <Wrapper 
    onClick={onSettingsClick}>
      <SettingsIcon id={"toolIcon"}  />
    </Wrapper>
  );
};

export default SettingsTool;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  background-color: rgba(111, 111, 111, 111);
  width: 34px;
  height: 34px;
  color: snow;
  align-items: center;
  margin-left: 10px;
  border-radius: 5px;
  justify-content: center;
  align-self: center;
  justify-self: center;
  box-sizing: border-box;
  overflow: visible;
  cursor: pointer;
  &:active {
    border:2px inset gray 
  }
  #toolIcon {
    width: 34px;
    transform: rotate(15deg);
    &:active {
      width: 20px;
    }
    &:hover {
      animation: spin 5000ms infinite linear;
    }
    @keyframes spin {
      from {
        transform: rotate(15);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;