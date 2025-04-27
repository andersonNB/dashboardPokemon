import {SimpleWidget} from "@/app/components";
import React from "react";

export const metadata = {
	title: "Dashboard",
	description: "here is a general info",
};

const MainPage = () => {
	return (
		<div className="bg-orange-100 w-full p-2">
			<h1 className="mt-2 tet-3xl">Dashboard</h1>
			<span className="text-xl">Información general</span>

			<div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4 p-4 ">
				{Array.from({length: 50}).map(() => {
					const uniqueKey = crypto.randomUUID();
					return <SimpleWidget key={uniqueKey} />;
				})}
			</div>
		</div>
	);
};

export default MainPage;
