import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ComplexTitle from "./ComplexTitle";
import SaitamasFace from './imgs/SaitamasFace.webp';

const RightComponent = ({episodes, score, scoredBy, YtVideoUrl}) => {
    const [ratedByUsers, setRatedByUsers]= useState(scoredBy !== null ? scoredBy.toLocaleString() : null);
   
    return (
			<>
				<Wrapper >
					<h3>
						{" "}
						<div className={"scoreDiv"}>
							<ComplexTitle
								id={"title"}
								animeScore={scoredBy}
								title={"Anime Score"}
							/>

							<span id={"number"}>
								{" "}
								{score} /<em id='ten'>10</em>{" "}
							</span>
							<h5>
								<div className={"scoredBy"}>
									<div id={"spanNum"}>
										<em>Rated By :</em>
										<em id={"numberBig"}>
											{scoredBy !== null ? ratedByUsers + " People" : "No One"}
										</em>
									</div>
								</div>
							</h5>
						</div>
					</h3>
				</Wrapper>
				<YoutubeWrapper>
					{YtVideoUrl !== null && (
						<iframe
							title={YtVideoUrl}
							width='400'
							height='315'
							id={"ytId"}
							src={YtVideoUrl}
							frameBorder='1'
							allowFullScreen></iframe>
					)}
				</YoutubeWrapper>
			</>
		);
};

export default RightComponent;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  justify-self: center;
  min-height: 100%;
  flex-direction: column;
  width: 18rem;
  align-items: center;
  justify-content: center;
  border-radius: 17px;
  border: 1px inset white;
  #inlineflex-wrapper{
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: flex-start;
  }

  #title {
    text-decoration: underline;
    align-self: flex-end;
    justify-self: flex-end;
  }
  h3 {
    color: white;
    font-family: Archivo;
    font-size: 1.2rem;
  }
  h2 {
    text-decoration: underline;
  }
  span {
    font-size: 2rem;
  }
  #spanNum {
    display: flex;
    gap: 15px;
    flex-direction: column;
    font-family: Archivo;
    font-size: 1rem;
  }
  .scoreDiv {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
    gap: 10px;
  }
 
  .scoredBy {
    display: flex;
    flex-direction: column;
    width: 166px;
    border-radius: 18px;
    background: rgba(0, 0, 0, 0.4);
    gap: 5px;
    align-items: center;
    justify-content: center;
  }

  .centeredDiv {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #number {
    text-transform: capitalize;
    color: goldenrod;
  }
  #numberBig {
    text-transform: capitalize;
    color: red;
  }
  #ten {
    color: royalblue;
  }
  @media screen and (max-width: 980px) {
    min-height: unset;
  }
`;
const YoutubeWrapper = styled.div`
  position: relative;
  display: flex;

  #ytId {
    border-radius: 50px;
  }
  @media screen and (max-width: 980px) {
    
  }
`;