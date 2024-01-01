import styled from 'styled-components';
import {useState} from 'react';
const FilteredPicker = ({pageData, handleSelection, currentSelection}) => {
 const animeTypes = ['tv','special','movie','ova','ona',"music"]
 const [showHead,setShowHead] = useState(false)


  return (
    <Wrapper>
      {showHead && <ShowHeader>Filter by Category </ShowHeader>}
      <select
        name="Types:"
        id={"animeTypeList"}
        onChange={(e) => handleSelection(e)}
        value={currentSelection}
        onClick={() => setShowHead(true)}
        onMouseLeave={() => setShowHead(false)}
        onMouseOverCapture={() => setShowHead(true)}>
        <option id="optionTag" value={""}>
          All Results
        </option>
        {animeTypes.map((option) => {
          return (
            <option
              key={option}
              id={"optionTag"}
              value={option}
              onMouseEnter={() => setShowHead(true)}>
              {option}
            </option>
          )
        })}
      </select>
    </Wrapper>
  );
}

export default FilteredPicker
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: white;
  border-radius: 5px;
  height: 90%;
  align-self: center;
  #animeTypeList {
    position: relative;
    display: flex;
    font-family: Archivo;
    text-transform: uppercase;
    border-radius: 5px;
  
    min-width: fit-content;
    height: 100%;
    transition: width 0.4s ease;
    background: #fbd679;
    color: darkblue;
  }
  #animeTypeList:hover {
    width: 175px;
    cursor: pointer;
  }
  #animeTypeList:active{
    border:1px inset black;
  }
  label {
    font-family: Archivo;
    color: black;
  }
  #optionTag {
    width: 100%;
  }
`;
const ShowHeader = styled.div`
  animation: popUp 0.4s 1;
  position: absolute;
  display: flex;
  height: 112%;
  width: 100%;
  bottom: 19px;
  background-color: white;
  border-radius: 5px;
  background-color: #6f6f6f;
  color:white;
  font-family: Archivo;
  justify-content: center;
  padding-top:5px;
  @keyframes popUp {
    0% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;