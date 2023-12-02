import React from 'react'
import styled from 'styled-components';
import SaitamasFace from './imgs/SaitamasFace.webp';
import saitamasFace2 from './imgs/saitamasFace2.png';
import FinalSaitama from './imgs/FinalSaitama.png';
import saitamaFaceOnly  from './imgs/saitamaFaceOnly.png';
import saitamaAndFriends from './imgs/saitamaAndFriends.png'
const ComplexTitle = ({title, animeScore}) => {
  
  return (
    <Wrapper>
      <img
      id={'saitamasFace'}
      src={saitamaAndFriends}
      alt={'saitamas'}/>
      <h1>{title}</h1>
      
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items:center;
  gap: 10px;
  width: 100%;
  #saitamasFace {
    width: 85px;
  }
  h1 {
    font-family: "Roboto Flex", sans-serif;
    text-transform: capitalize;
    color: white;
    text-align: auto;
    font-size: 1.7rem;
    align-self: flex-end;
  }
`;
export default ComplexTitle;
