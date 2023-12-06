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
 
  return (
		<Wrapper
			draggable='false'
			color={color}>
			<h2>Custom Background</h2>
			<TopFlex>
        <button
          className={'applyBtn'}
					id={"close"}
					onClick={onSettingsClick}>
					Apply
				</button>
				<button
					id={"close"}
					onClick={onColorChange}>
					Reset
				</button>
				<button
					id={"close"}
					onClick={onSettingsClick}>
					Close
					<CloseIcon id={"close-icon"} />
				</button>
			</TopFlex>

      <ChromePicker
        style={{backgroundColor:'blue !important'}}
				id={'chromePicker'}
				color={color}
				onChange={handleChange}
			/>
			<p>Selected Color: <br></br>{color}</p>
			<div
				id={'chromePicker'}
				style={{
					width: "50px",
					height: "50px",
          color: "white",
          border:'2px inset snow',
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
	text-align: center;
	top: 105%;
	padding: 15px;
	background-color: black;
	color: white;
	font-family: Archivo;
	border-radius: 18px;
	border: ${({ color }) =>
		color !== null ? `4px ridge ${color}` : "5px ridge white"};
	z-index: 155;
	#apply {
		color: green;
		font-size: 20px;
	}
	.chrome-picker {
		border-radius: 25px !important;

	}
	#chromePicker {
		position: relative;
		color: white;
		background-color: white;
		border-radius: 50px;
		z-index: 205;
		cursor: pointer;
	}
	#chromePickerGrabbed {
		cursor: grabbing;
	}
	.applyBtn {
		color: lightgreen !important;
	}
	#close-icon {
		position: relative;
		font-size: 17px;
		border-radius: 5px;
		background-color: black;
		box-sizing: border-box;
		border: 2px solid red;
		color: red;
		transition: transform 0.2s ease-in-out;
		z-index: 210px;
		cursor: pointer;
	}
	.closedGreen {
		color: green;
	}
	#close {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		font-family: Archivo;
		color: white;
		background-color: black;
		border-radius: 5px;
		margin: 10px;
		transition: transform 0.3s ease-in-out;
		cursor: pointer;
		&:hover {
			transform: scale(1.1);
		}
	}
	h2 {
		margin: 5px;
	}
`;
const TopFlex= styled.div`
position: relative;
display: flex;
width:90%;
align-items: center;
justify-content: center;
gap:5px;
p{
  border:2px solid white;
  padding:2px 10px;
  border-radius:5px;
  font-size: 14px;
}

`