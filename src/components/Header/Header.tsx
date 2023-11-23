import * as React from "react";
import "./Header.css";
import HeaderMenuButton from "../HeaderMenuButton/HeaderMenuButton";
/*import { useAppSelector, useAppDispatch } from "../../utils/store/store";
import { topMenuStatusChanges } from "../../utils/features/displayer";*/

const Header = () =>{

	/*const dispatch = useAppDispatch(); 
	const isTopMenuDisplayed = useAppSelector(state => state.displayer.isTopMenuDisplayed)

	const menuStatusChanges = () => {
		dispatch(topMenuStatusChanges(!isTopMenuDisplayed));
	}

	console.log(isTopMenuDisplayed)*/


	return (
		<>
			<section className="header-section">
				<HeaderMenuButton />
			</section>
		</>
	)
}

export default Header;