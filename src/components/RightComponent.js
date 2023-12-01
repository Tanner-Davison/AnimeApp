import React from "react";
import styled from "styled-components";


const RightComponent = ({episodes, score, scoredBy}) => {
    return (
			<Wrapper>
				<div className={"centeredDiv"}>
					All Episodes: <span>{episodes}</span>
				</div>
				<h3>
					{" "}
					<div className={"scoreDiv"}>
						<h1>Anime Score </h1>
						<span> {score} / 10</span>
						<h5>
							<div className={"scoredBy"}>
								<em>OVER</em>
								<span>
									{scoredBy} <em>people</em>
								</span>
								Have participated in the scoring of these results.
							</div>
						</h5>
					</div>
				</h3>
			</Wrapper>
		);
};

export default RightComponent;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	padding: 0.25rem;
	flex-direction: column;
	align-items: center;
    justify-content: center;


	h3 {
		color: white;
		font-family: Archivo;
	}
    h1{
        text-decoration:underline;
    }
    span{
        font-family: Archivo;
        font-size:32px;
    }
    .scoreDiv{
        position: relative;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
    }
    .scoredBy{
           display: flex;
    flex-direction: column;
    width: 166px;
    border-radius:18px;
    background: rgba(0,0,0,0.4);
    gap: 0px;
    align-items: center;
    justify-content: center;
}
    }
    .centeredDiv{
        position: relative;
        display:flex;
        align-items: center;
        justify-content: center;

    }
`;