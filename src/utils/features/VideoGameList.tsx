
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OneGame {
	id: number,
	slug: string,
	name: string,
	added: number
}

export interface VideoGame {
  title: string;
  price: string;
  description: string;
  seller: string;
  imageUrl: string;
  alt: string;
  id: number,
  name: string,
  slug: string,
  games_count: number,
  image_background: string,
  image: null | string,
  year_start: null | number,
  year_end: null | number,
  games: Array<OneGame>
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