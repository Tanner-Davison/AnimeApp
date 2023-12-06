import React, { useState } from "react";
import { ChromePicker } from "react-color";
import styled from "styled-components";

const ColorPickerComponent = ({onColorChange}) => {
  const [color, setColor] = useState("#ffffff"); // Default color

  const handleChange = (updatedColor) => {
    setColor(updatedColor.hex);
    onColorChange(updatedColor.hex)
  };

  return (
    <Wrapper>
      <h2>Color Picker</h2>
      <ChromePicker 
      color={color} 
      onChange={handleChange} />
      <p>Selected Color: {color}</p>
      <div

        style={{
          width: "100px",
          height: "100px",
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
padding-bottom:15px;
top:50%;
background-color: black;
color:white;
font-family: Archivo;
border-radius: 18px;
z-index: 150;
`