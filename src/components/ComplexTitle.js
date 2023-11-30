import React from 'react'
import styled from 'styled-components';

const ComplexTitle = ({title}) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className='underline'></div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
h1{
    text-transform: capitalize;
    text-align: center;
    font-size: 17px;

}
.underline{
    width:0.25rem;
    height: 0.25rem;
    background:red;

}
`
export default ComplexTitle
