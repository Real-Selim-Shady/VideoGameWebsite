import React from "react";
import PlaceVideoGamesList from "../PlaceVideoGamesList/PlaceVideoGamesList";
import "./RenderVideoGamesList.css";

const RenderVideoGamesList = ()=>{


	return(
		<>
			<section className="video-games-list-block">
				<PlaceVideoGamesList />
			</section>
		</>
		
	)
}

export default RenderVideoGamesList;
