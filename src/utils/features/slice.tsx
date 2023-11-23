import { PayloadAction, createSlice } from "@reduxjs/toolkit"
//librairie classNames



export interface anyState{
    any: string
}

const initialState: anyState = {
	any: "",
}   

export const AnySlice = createSlice({
	name: "any",
	initialState,
	reducers:{
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		anyAction:(state, action:PayloadAction<anyState>)=>{
			state.any = action.payload.any
		},
	}
}
);

export default AnySlice.reducer;
export const {anyAction}=AnySlice.actions;
