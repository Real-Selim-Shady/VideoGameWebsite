import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import any from "../features/slice"
import displayer from "../features/displayer";


export const store=configureStore({
	reducer:{
		any,
		displayer
		//reducer: bring slices
	}
})

export const useAppDispatch:()=> typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;