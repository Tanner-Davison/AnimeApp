import styled from "styled-components";
import { useState } from "react";
import React from "react";
import ComplexTitle from "./components/ComplexTitle";
import { HipsterButton, DefaultButton } from "./components/Buttons";

const AnimeCardComponent = ({ animeData }) => {
  console.log(animeData);
  const [showSummary, setShowSummary] = useState(false);
  const title = animeData.title;
  const animeImg = animeData.images.jpg.image_url;

  return (
    <CardWrapper>
      <ComplexTitle title={title} />
      <div className={"card"}>
        <img src={animeImg} alt={"animeImg"} />
        <div>
          {showSummary ? (
            <DefaultButton
              onClick={() => {
                setShowSummary(false);
              }}>
              Hide summary
            </DefaultButton>
          ) : (
            <HipsterButton onClick={() => setShowSummary(true)}>
              Show Summary
            </HipsterButton>
          )}
            <div className="dropDownElement" >
            {showSummary &&
              <article showSummary>{animeData.synopsis}</article>
            }
              </div>
        </div>
      </div>
      <div></div>
    </CardWrapper>
  );
};

export default AnimeCardComponent;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  background-color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 100vw;
  height: auto;
  z-index: 150;

  img {
    width: 8rem;
  }

  .card {
    position: relative;
    display: flex;
    align-items: flex-start;
    background-color: black;
    flex-direction: column;
    gap: 1rem;
    width: 55vw;
    padding: 1rem;
    border: 2px solid red;
  }

  .dropDownElement {
    position: relative;
    width: 100%;
    margin-top: 10px;
    overflow-y: hidden;
    max-height: ${({ showSummary }) => (showSummary ? "0px" : "500px")};
    transition: max-height 2s ease-in-out;
  }

  article {
    position: relative;
    padding: 2rem 0;
    font-family: "Archivo", sans-serif;
    background-color: whitesmoke;
    line-height: 1.3rem;
    color: black;
    width: 100%;
    transition: height 0.4s ease-out;
    animation: ${({ showSummary }) =>
      showSummary ? "slideDown .5s forwards" : "slideUp 1s forwards"};
  }

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;
