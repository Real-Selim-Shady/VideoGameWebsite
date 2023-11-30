/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { addGames, resetGamesList } from "../features/VideoGameList";
import { addGameDetails, resetGameDetails } from "../features/VideoGameDetails";

const APIKey = "1444bb4707704cd8bebd556b4fc60c6e"
export const getGamesList = async(dispatch: any) =>{

	dispatch(resetGamesList());
	const options = {
		method: "GET",
		url: `https://api.rawg.io/api/games?key=${APIKey}`,
	};
	try {
		const response = await axios.request(options);
		console.log(response.data);
		if (response.data.results !== null) {
			dispatch(addGames(response.data.results));
		}
	} catch (error) {
		console.error(error);
	}
}
export const getGameDetails = async(dispatch: any,gameId:number) =>{

	dispatch(resetGameDetails());
	const options = {
		method: "GET",
		url: `https://api.rawg.io/api/games/${gameId}?key=${APIKey}`,
	};
	try {
		const response = await axios.request(options);
		if (response.data.results !== null) {
			await dispatch(addGameDetails(response.data));
			await console.log("real state",response.data);
		}
	} catch (error) {
		console.error(error);
	}
}
