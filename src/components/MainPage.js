import {useEffect, useState} from 'react'
import styled from 'styled-components';

const MainPage = () => {
  //eslint-disable-next-line
    const [mainPage, setMainPage] = useState('')

    const handleMainPageData = () => {
        return 
    }
    useEffect(() => {
        console.log(mainPage)
        handleMainPageData()
        //eslint-disable-next-line
    },[])
  return (
    <Wrapper>
     
    </Wrapper>
  )
}

export default MainPage
const Wrapper = styled.div`
position: relative;
display: flex;

`