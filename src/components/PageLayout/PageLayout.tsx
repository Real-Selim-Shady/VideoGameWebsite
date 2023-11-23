import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface LayoutProps {
    children: ReactNode;
  }

const PageLayout: React.FC<LayoutProps> = ({children}) =>{
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default PageLayout;