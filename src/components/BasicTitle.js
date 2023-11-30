import styled from "styled-components";

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  color: ${({special})=> special ? 'red' : 'blue'}
`;


export default BasicTitle;