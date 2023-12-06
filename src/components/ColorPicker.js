import React, { useState } from "react";
import { ChromePicker } from "react-color";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const ColorPickerComponent = ({onColorChange, onSettingsClick}) => {
  const [color, setColor] = useState("#ffffff"); // Default color
  const [chromePicker, setChromePicker]=useState('chromePicker')
  const handleChange = (updatedColor) => {
    setColor(updatedColor.hex);
    onColorChange(updatedColor.hex)
  };
  const handleGrabClick = () =>{
    setChromePicker('chromePickerGrabbed')
  }
  return (
    <Wrapper draggable="false" color={color}>
      <h2>Color Picker</h2>
      <TopFlex>
        <button id={"close"} onClick={onColorChange}>
          Reset
        </button>
        <button id={"close"} onClick={onSettingsClick}>
          Close
          <CloseIcon id={"close-icon"} />
        </button>
      </TopFlex>

      <ChromePicker
        onClick={handleGrabClick}
        id={"chromePicker"}
        color={color}
        onChange={handleChange}
      />
      <p>Selected Color: {color}</p>
      <div
        id={chromePicker}
        style={{
          width: "100px",
          height: "100px",
          color: "white",
          backgroundColor: color,
        }}></div>
    </Wrapper>
  );
};

export default ColorPickerComponent;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
  top: 105%;
  background-color: black;
  color: white;
  font-family: Archivo;
  border-radius: 18px;
  border: ${({ color }) =>
    color !== null ? `4px ridge ${color}` : "5px ridge white"};
  z-index: 155;
  
  #chromePicker {
    position: relative;
    color: white;
    background-color: white;
    z-index: 205;
    cursor: pointer;
  }
  #chromePickerGrabbed {
    cursor: grabbing;
  }
  #close-icon {
    position:relative;
    font-size:17px;
    border-radius: 5px;
    background-color:black;
    box-sizing: border-box;
    border: 2px solid red;
    color: red;
    transition: transform 0.2s ease-in-out;
    z-index: 210px;
    cursor: pointer;
  }

  #close{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5px;
    font-family:Archivo;
    color:white;
    background-color:black;
    border-radius:5px;
    margin:10px;
    transition:transform .3s ease-in-out;
    cursor: pointer;
    &:hover{
      transform:scale(1.1)
    }
  }
  h2{
    margin:5px;
  }
`;
const TopFlex= styled.div`
position: relative;
display: flex;
width:90%;
align-items: center;
justify-content: center;
gap:15px;
p{
  border:2px solid white;
  padding:2px 10px;
  border-radius:5px;
  font-size: 14px;
}

`