import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./PageLayout.css"

interface LayoutProps {
    children: ReactNode;
  }

const PageLayout: React.FC<LayoutProps> = ({children}) =>{
	return (
		<div className="page-layout">
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export default PageLayout;