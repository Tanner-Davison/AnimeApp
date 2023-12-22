
import { useState } from 'react';
import styled from 'styled-components';

const FilteredPicker = ({pageData, handleSelection, currentSelection}) => {
 const animeTypes = ['tv','special','movie','ova','ona',"music"]
  


  return (
		<Wrapper>
			<label htmlFor='animeTypeList'>Filter</label>
			<select
        name='Types:'
        id={"animeTypeList"}
        onChange={(e)=>handleSelection(e)}
        value={currentSelection}>
          <option value={''}>ALL</option>
				{animeTypes.map((option) => {
          return <option
            key={option}
            value={option}
            >{option}</option>;
				})}
			</select>
		</Wrapper>
	);
}

export default FilteredPicker
const Wrapper = styled.div`
display:flex;
flex-direction: row;
align-items: center;
gap:10px;

label{
  font-family: Archivo;
}
`