import React from 'react'
import styled from 'styled-components';

const ComplexTitle = ({title}) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      
    </Wrapper>
  )
}
const Wrapper = styled.div`
  h1 {
    font-family: "Roboto Flex", sans-serif;
    text-transform: capitalize;
    color:white;
    text-align: center;
    font-size: 1.5rem;
  }
`;
export default ComplexTitle;
