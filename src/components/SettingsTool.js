import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import SettingsIcon from "@mui/icons-material/Settings";

const SettingsTool = ({ onSettingsClick, colorToolOpen }) => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open);
    return onSettingsClick()
  }
  return (
    <Wrapper 
      onClick={() => handleClick()}>
      <SettingsIcon
        className={open ? 'toolIcon infinite' : "toolIcon"}
      />
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
	@keyframes spin {
		from {
			transform: rotate(28);
		}
		to {
			transform: rotate(360deg);
		}
	}
	&:active {
		border: 2px inset gray;
	}
	.toolIcon {
		width: 34px;
		transform: rotate(15deg);
		&:active {
			width: 20px;
		}
		&:hover {
			animation: spin 5000ms infinite linear;
		}
	}
	.toolIcon.infinite {
		animation: spin 5000ms infinite linear;
	}
`;