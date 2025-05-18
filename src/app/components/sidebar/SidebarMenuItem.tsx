"use client";
import React, {JSX} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";

interface Props {
	path: string;
	icon: JSX.Element;
	title: string;
	subTitle: string;
}

export const SidebarMenuItem = (props: Props) => {
	const {path, icon, title, subTitle} = props;
	const pathname = usePathname();

	const isCurrentPath = pathname === path;
	return (
		<Link
			href={path}
			className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3
				dark:text-black
				${isCurrentPath ? "bg-blue-800 dark:bg-slate-500" : ""}`}
			onClick={() => console.log("click")}
		>
			<div className={`${isCurrentPath ? "dark:text-white" : ""}`}>{icon}</div>
			<div
				className={`flex flex-col ${isCurrentPath ? "dark:text-white" : ""}`}
			>
				<span className={`text-lg font-bold leading-5`}>{title}</span>
				<span className={`text-sm  hidden md:block`}>{subTitle}</span>
			</div>
		</Link>
	);
};
