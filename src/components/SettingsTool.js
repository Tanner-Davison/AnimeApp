import React from 'react'
import styled from 'styled-components';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
const SettingsTool = () => {
  return (
    <Wrapper>
      <SettingsApplicationsIcon id={'toolIcon'}/>
    </Wrapper>
  )
};

export default SettingsTool;

const Wrapper = styled.div`
position: relative;
display: flex;
height: 100%;
#toolIcon{
    height:100%;
}
`