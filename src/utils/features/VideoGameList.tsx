
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Ratings {
	id: number,
	title: string,
	count: number,
	percent: number
}

export interface AddedByStatus {
	yet: number,
	owned: number,
	beaten: number,
	toplay: number,
	dropped: number,
	playing: number
}

export interface Platform {
	id:number,
	name:string,
	slug:string,
	image:string | null,
	year_end:string| null,
	year_start:string| null,
	games_count:number,
	image_background:string,
}

export interface Platforms {
	platform: Platform[],
	released_at:string,
	requirements_en:{
		minimum?: string;
		recommended?: string;
	} | null,
	requirements_ru:{
		minimum?: string;
		recommended?: string;
	} | null,
}

export interface ParentsPlatforms {
	platform: {
		id:number,
		name: string,
		slug: string,
	}
}

export interface Genres{
	id:number,
	name:string,
	slug: string,
	games_count: number,
	image_background: string,

}


export interface Stores{
	id: number,
	store: {
		id: number,
		name: string,
		slug: string,
		domain: string,
		games_count: number,
		image_background: string
	}

}

export interface Tags{
	id: number,
	name: string,
	slug: string,
	language: string,
	games_count: number,
	image_background: string
}

export interface EsbRating{
	id: number,
	name: string,
	slug: string,
}

export interface ShortScreenshots{
	id: number,
	image_background: string
}

export interface VideoGame {
	id: number,
	slug: string,
	name: string,
	realeased: string,
	tba: boolean,
	background_image: string,
	rating: number,
	rating_top: number,
	ratings: Array<Ratings>,
	ratings_count: number,
	reviews_text_count: number,
	added: number,
	added_by_status: Array<AddedByStatus>,
	metacritic: number,
	playtime: number,
	suggestions_count: number,
	updated: string,
	user_game: string | null,
	reviews_count: number,
	saturated_color: string,
	dominant_color: string,
	platforms: Array<Platforms>,
	parent_platforms: Array<ParentsPlatforms>,
	genres: Array<Genres>,
	stores: Array<Stores>,
	clip: null,
	tags: Array<Tags>,
	esrb_rating: Array<EsbRating>,
	short_screenshots: Array<ShortScreenshots>,

}

export interface VideoGamesState {
  videoGames: VideoGame[];
}

const initialState: VideoGamesState = {
	videoGames: [],
};

export const ProductsListSlice = createSlice({
	name: "videoGamesList",
	initialState,
	reducers: {
		addGames: (state, action: PayloadAction<VideoGame[]>) => ({
			...state,
			videoGames: [...action.payload]
		}),
		resetGamesList: (state) => ({
			...state,
			videoGames : []
		}),
	},
});

export default ProductsListSlice.reducer;
export const {addGames, resetGamesList}=ProductsListSlice.actions;