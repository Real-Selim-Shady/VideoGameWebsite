import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./components/PageLayout/PageLayout";
import TopMenu from "./components/TopMenu/TopMenu";



const App: React.FC = () => {


	return (
		<Routes>
			<Route 
				path='/'
				element={
					<>
						<PageLayout>
							<TopMenu />
							<h1 className="app-title">Welcome Page</h1>
						</PageLayout>
					</>
				}
			/>
			<Route 
				path='/route1'
				element={
					<>
						<PageLayout>
							<h1 className="app-title">Route 1</h1>
						</PageLayout>
					</>
				}
			/>
			<Route 
				path='/route2'
				element={
					<>
						<PageLayout>
							<h1 className="app-title">Route 2</h1>
						</PageLayout>
					</>
				}
			/>
		</Routes>

	);
}

export default App;
