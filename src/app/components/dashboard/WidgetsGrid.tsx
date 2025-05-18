"use client";
import React from "react";
import {SimpleWidget} from "./SimpleWidget";
import {IoAccessibility} from "react-icons/io5";
import {useAppSelector} from "@/app/store";

const WidgetsGrid = () => {
	const count = useAppSelector((state) => state.counter.count);

	const counter = [
		{
			title: count,
			subTitle: "cantidad de objetos",
			label: "Contador",
			icon: <IoAccessibility size={50} className="text-blue-500" />,
			href: "/dashboard/counter",
		},
	];

	return (
		<div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4 p-4 ">
			{counter.map((item, i) => {
				const uniqueKey = "simpleWidget" + i;
				return <SimpleWidget key={uniqueKey} {...item} />;
			})}
		</div>
	);
};

export default WidgetsGrid;
