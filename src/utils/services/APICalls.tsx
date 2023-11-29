/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { addGames, resetGamesList } from "../features/VideoGameList";


export const getGamesList = async(dispatch: any) =>{
	const APIKey = "1444bb4707704cd8bebd556b4fc60c6e"
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
export const getGamesListByConsole = async(dispatch: any) =>{
	const APIKey = "1444bb4707704cd8bebd556b4fc60c6e"
	dispatch(resetGamesList());
	const options = {
		method: "GET",
		url: `https://api.rawg.io/api/platforms?key=${APIKey}`,
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

/*export const getGameInfo = async(dispatch: any) =>{
	const APIKey = "1444bb4707704cd8bebd556b4fc60c6e"
	dispatch(resetGamesList());
	const options = {
		method: "GET",
		url: `https://api.rawg.io/api/platforms?key=${APIKey}`,
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
}*/