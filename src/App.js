import React from 'react';
import styled from 'styled-components';
import BasicTitle from './components/BasicTitle';
import { DefaultButton, HipsterButton } from './components/Buttons';
import Button from "@mui/material/Button";
import ComplexTitle from './components/ComplexTitle';

function App() {
  
  return (
    <div style={{ padding: "2rem" }}>
      <BasicTitle special>Styled components</BasicTitle>
      <BasicTitle >Styled components</BasicTitle>
      <DefaultButton>Click me!</DefaultButton>
      <HipsterButton>Click me!</HipsterButton>
      <Button color='primary' variant={'contained'}>Click me!</Button>
      <StyledBtn variant={'contained'}>Click me!</StyledBtn>
      <ComplexTitle title='more complex title'/>
    </div>
  );
};

export default App;

const StyledBtn = styled(Button)`
text-transform: lowercase;
color:black;
background-color: black;
`