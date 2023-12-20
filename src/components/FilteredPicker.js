import React from 'react'
import styled from 'styled-components';

const FilteredPicker = ({pageData}) => {
  const typeOfAnime = pageData ? pageData.map((show)=>show.type): '';
  console.log(typeOfAnime)
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default FilteredPicker
