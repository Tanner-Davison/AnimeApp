import React from "react";
import styled from "styled-components";
import ComplexTitle from "./ComplexTitle";


const RightComponent = ({episodes, score, scoredBy}) => {
    return (
			<Wrapper>
				<h3>
					{" "}
					<div className={"scoreDiv"}>
						<ComplexTitle title={"Anime Score"} />
						<span id={"number"}>
							{" "}
							{score} /<em id='ten'>10</em>{" "}
						</span>
						<h5>
							<div className={"scoredBy"}>
								<em>OVER</em>
								<span>
									<em id={"numberBig"}>{scoredBy}</em> <em>people</em>
								</span>
								Have participated in the scoring of these results.
							</div>
							<div className={"centeredDiv"}>
								# of Episodes: <span>{episodes}</span>
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
        font-size: 1.2rem;
	}
    h2{
        text-decoration:underline;

    }
    span{
        font-family: Archivo;
        font-size:2rem;
    }
    .scoreDiv{
        position: relative;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        gap:10px;
    }
    .scoredBy{
           display: flex;
    flex-direction: column;
    width: 166px;
    border-radius:18px;
    background: rgba(0,0,0,0.4);
    gap: 5px;
    align-items: center;
    justify-content: center;
}
    
    .centeredDiv{
        position: relative;
        display:flex;
        align-items: center;
        justify-content: center;

    }
    #number{
        text-transform: capitalize;
        color:goldenrod;
    }
    #numberBig{
        text-transform: capitalize;
        color:green;
    }
    #ten{
        color:royalblue;
    }
`;