import * as React from "react";
import { useAppSelector } from "../../utils/store/store";
import "./TopMenu.css";


const TopMenu = () =>{

	const isTopMenuDisplayed = useAppSelector(state => state.displayer.isTopMenuDisplayed)


	return(
		<>
			<section className={`top-menu-section ${isTopMenuDisplayed ? "active-top-menu-section" : ""}`}>
				<span>choice 1</span>
			</section>
		</>
	)
}

export default TopMenu;