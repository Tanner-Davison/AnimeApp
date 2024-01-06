import {useEffect, useState} from 'react'
import styled from 'styled-components';
import MyDropDown from './MyDropDown';

const MainPage = () => {
  //eslint-disable-next-line
    const [mainPage, setMainPage] = useState('')


    useEffect(() => {
        console.log(mainPage)
      
        //eslint-disable-next-line
    },[])
  return (
    <Wrapper>
      <MyDropDown/>
    </Wrapper>
  )
}

export default MainPage
const Wrapper = styled.div`
position: relative;
display: flex;

`