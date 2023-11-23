import { PayloadAction, createSlice } from "@reduxjs/toolkit"



export interface DisplayerState{
    isTopMenuDisplayed: boolean,
}

/*interface DisplayerState {
	displayer: Displayer
}*/

const initialState: DisplayerState = {
	isTopMenuDisplayed: false,
}   

export const DisplayerSlice = createSlice({
	name: "displayer",
	initialState,
	reducers:{
		topMenuStatusChanges:(state, action:PayloadAction<boolean>)=>{
			state.isTopMenuDisplayed = action.payload;
		},
	}
}
);

export default DisplayerSlice.reducer;
export const {topMenuStatusChanges}=DisplayerSlice.actions;
