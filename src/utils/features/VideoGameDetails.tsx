
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameInfo {
    id: number;
    slug: string;
    name: string;
    name_original: string;
    description: string;
    metacritic: number;
    metacritic_platforms: MetacriticPlatform[];
    released: string;
    tba: boolean;
    updated: string;
    background_image: string;
    background_image_additional: string;
    website: string;
    rating: number;
    rating_top: number;
    ratings: Rating[];
    reactions: Record<string, number>;
    added: number;
    added_by_status: Record<string, number>;
    playtime: number;
    screenshots_count: number;
    movies_count: number;
    creators_count: number;
    achievements_count: number;
    parent_achievements_count: number;
    reddit_url: string;
    reddit_name: string;
    reddit_description: string;
    reddit_logo: string;
    reddit_count: number;
    twitch_count: number;
    youtube_count: number;
    reviews_text_count: number;
    ratings_count: number;
    suggestions_count: number;
    alternative_names: string[];
    metacritic_url: string;
    parents_count: number;
    additions_count: number;
    game_series_count: number;
    user_game: null;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    parent_platforms: ParentPlatform[];
    platforms: Platform[];
    stores: Store[];
    developers: Developer[];
    genres: Genre[];
    tags: Tag[];
    publishers: Publisher[];
    esrb_rating: EsrbRating;
    clip: null;
    description_raw: string;
  }
  
  interface MetacriticPlatform {
    metascore: number;
    url: string;
    platform: PlatformDetail;
  }
  
  interface PlatformDetail {
    platform: number;
    name: string;
    slug: string;
  }
  
  interface Rating {
    id: number;
    title: string;
    count: number;
    percent: number;
  }
  
  interface ParentPlatform {
    platform: PlatformDetail;
  }
  
  interface Platform {
    platform: PlatformDetail;
    released_at: string;
    requirements: Record<string, string>; // You might want to define a more specific type for requirements
  }
  
  interface Store {
    id: number;
    url: string;
    store: StoreDetail;
  }
  
  interface StoreDetail {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
  }
  
  interface Developer {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }
  
  interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }
  
  interface Tag {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
  }
  
  interface Publisher {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }
  
  interface EsrbRating {
    id: number;
    name: string;
    slug: string;
  }



export interface VideoGameState {
    videoGame: GameInfo;
}

const initialState: VideoGameState = {
	videoGame: {
		id: 0,
		slug: "",
		name: "",
		name_original: "",
		description: "",
		metacritic: 0,
		metacritic_platforms: [],
		released: "",
		tba: false,
		updated: "",
		background_image: "",
		background_image_additional: "",  // Ajout de cette propriété
		website: "",  // Ajout de cette propriété
		rating: 0,
		rating_top: 0,
		ratings: [],
		reactions: {},
		added: 0,
		added_by_status: {},
		playtime: 0,
		screenshots_count: 0,
		movies_count: 0,
		creators_count: 0,
		achievements_count: 0,
		parent_achievements_count: 0,
		reddit_url: "",
		reddit_name: "",
		reddit_description: "",
		reddit_logo: "",
		reddit_count: 0,
		twitch_count: 0,
		youtube_count: 0,
		reviews_text_count: 0,
		ratings_count: 0,
		suggestions_count: 0,
		alternative_names: [],
		metacritic_url: "",
		parents_count: 0,
		additions_count: 0,
		game_series_count: 0,
		user_game: null,
		reviews_count: 0,
		saturated_color: "",
		dominant_color: "",
		parent_platforms: [],
		platforms: [],
		stores: [],
		developers: [],
		genres: [],
		tags: [],
		publishers: [],
		esrb_rating: {} as EsrbRating,
		clip: null,
		description_raw: "",
	}
};

export const ProductsListSlice = createSlice({
	name: "videoGameDetails",
	initialState,
	reducers: {
		addGameDetails: (state, action: PayloadAction<GameInfo>) => {
			state.videoGame = { ...action.payload };
		},
		resetGameDetails: (state) => {
			state.videoGame = {...initialState.videoGame}
		},
	},
});

export default ProductsListSlice.reducer;
export const {addGameDetails, resetGameDetails}=ProductsListSlice.actions;