import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

const FilteredPicker = ({pageData}) => {
 const animeTypes = ['TV','Special','Movie','OVA','ONA',"Music"]
  const [currentValue, setCurrentValue] = useState('All')
  const handleChange = (e) => {
    setCurrentValue(e.target.value);
  }
  useState(() => {
    console.log(currentValue)
  },[currentValue])
  return (
		<Wrapper>
			<label htmlFor='animeTypeList'>Filter</label>
			<select
        name='Types:'
        id={"animeTypeList"}
        onChange={(e)=>handleChange(e)}>
        <option value='ALL'selected='All'>ALL</option>
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