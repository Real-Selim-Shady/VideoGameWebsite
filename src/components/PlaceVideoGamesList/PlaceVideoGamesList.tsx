
import React, { useEffect } from "react";
import { getGamesList } from "../../utils/services/APICalls";
import { useAppDispatch, useAppSelector } from "../../utils/store/store";
import VideoGameCard from "../VideoGameCard/VideoGameCard";


const PlaceVideoGamesList: React.FC = ()=>{

	const dispatch=useAppDispatch();
	const videoGameList = useAppSelector(state => state.videoGameList.videoGames)

	useEffect(()=>{
		getGamesList(dispatch);
	},[])


	return(
		<>
			{videoGameList.map((game)=>{
				return (
					<VideoGameCard key={game.id} game={game} />
				)

			})
			}
		</>
		
	)
}

export default PlaceVideoGamesList;




