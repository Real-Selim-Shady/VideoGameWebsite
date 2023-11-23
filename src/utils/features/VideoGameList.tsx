import { PayloadAction, createSlice } from "@reduxjs/toolkit"
//librairie classNames



export interface videoGameState{
    any: string
}

const initialState: videoGameState = {
	any: "",
}   

export const AnySlice = createSlice({
	name: "any",
	initialState,
	reducers:{
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		anyAction:(state, action:PayloadAction<videoGameState[]>)=>{
			state.any = action.payload.any
		},
	}
}
);

export default AnySlice.reducer;
export const {anyAction}=AnySlice.actions;
