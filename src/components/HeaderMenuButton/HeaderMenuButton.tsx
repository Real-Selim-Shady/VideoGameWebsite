import * as React from "react";
import "./HeaderMenuButton.css"
import { useAppSelector, useAppDispatch } from "../../utils/store/store";
import { topMenuStatusChanges } from "../../utils/features/displayer";

const HeaderMenuButton = () =>{

	const dispatch = useAppDispatch(); 
	const isTopMenuDisplayed = useAppSelector(state => state.displayer.isTopMenuDisplayed)

	const menuStatusChanges = () => {
		dispatch(topMenuStatusChanges(!isTopMenuDisplayed));
	}

	console.log(isTopMenuDisplayed)


	return (
		<>
			<button className={`menu-icon ${isTopMenuDisplayed ? "active-menu-icon" : ""}`} onClick={menuStatusChanges}><i className="fa-solid fa-bars "></i></button>
			<button className="home-icon"><i className="fa-solid fa-house"></i></button>
		</>
	)
}

export default HeaderMenuButton;