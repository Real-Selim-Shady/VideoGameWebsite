
import React, { useEffect } from "react";
//import axios from "axios";
import { getGamesList } from "../../utils/services/APICalls";
import { useAppDispatch, useAppSelector } from "../../utils/store/store";


const PlaceVideoGamesList = ()=>{

	const dispatch=useAppDispatch();
	const videoGameList = useAppSelector(state => state.videoGameList.videoGames)

	useEffect(()=>{
		getGamesList(dispatch);
	},[])

	const checker = ()=>{ console.log(videoGameList);}


	return(
		<>
			{videoGameList.map((gameConsole)=>{
				return gameConsole.games.map((game)=>{
					return (
						<div key={game.id}>
							<div>id:{game.id}</div>
							<div>name:{game.name}</div>
						</div>
					)

				})
			})}
			<button onClick={checker}> checker</button>
		</>
		
	)
}

export default PlaceVideoGamesList;




