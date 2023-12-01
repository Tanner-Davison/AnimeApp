import { useEffect } from "react";
import styled from "styled-components";

const Secret = ({data}) =>{
console.log(data)
useEffect(()=>{
    console.log(data);
    
})
    return (
      <Wrapper>
        <Wrapper>
          <img src={data.default_thumb.src} alt={"hello"} />

          <video controls>
            <source src={data.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Wrapper>
      </Wrapper>
    );
}
export default Secret;
const Wrapper = styled.div`
display: flex;
flex-direction: row;
img{
    width: 500px;
}

`