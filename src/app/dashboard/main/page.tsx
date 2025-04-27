import React from "react";
import WidgetsGrid from "@/app/components/dashboard/WidgetsGrid";

export const metadata = {
	title: "Dashboard",
	description: "here is a general info",
};

const MainPage = () => {
	return (
		<div className="bg-orange-100 w-full p-2">
			<h1 className="mt-2 tet-3xl">Dashboard</h1>
			<span className="text-xl">Información general</span>
			<WidgetsGrid />
		</div>
	);
};

export default MainPage;
