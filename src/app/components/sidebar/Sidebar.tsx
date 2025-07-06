"use client";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {
	IoBrowsersOutline,
	IoCalculator,
	IoLogoReact,
	IoHeart,
} from "react-icons/io5";
import {SidebarMenuItem} from "./SidebarMenuItem";
import {IoMdExit} from "react-icons/io";
import {MdOutlineCatchingPokemon} from "react-icons/md";
import {useAppDispatch, useAppSelector} from "@/app/store";
import {toggleMode} from "@/app/store/ui/uiDarkModeSlice";
import Link from "next/link";
import Skeleton from "./Skeleton";
import {ButtonLogOut} from "../Login/ButtonLogOut";
import {FaShareNodes} from "react-icons/fa6";

const menuItems = [
	{
		path: "/dashboard/main",
		icon: <IoBrowsersOutline size={40} />,
		title: "Dashboard",
		subTitle: "Visualización",
	},
	{
		path: "/dashboard/counter",
		icon: <IoCalculator size={40} />,
		title: "Counter",
		subTitle: "Contador Client side",
	},
	{
		path: "/dashboard/edit",
		icon: <IoMdExit size={40} />,
		title: "Editar",
		subTitle: "",
	},
	{
		path: "/dashboard/pokemons",
		icon: <MdOutlineCatchingPokemon size={40} />,
		title: "Pokemons",
		subTitle: "",
	},
	{
		path: "/dashboard/favorites",
		icon: <IoHeart size={40} />,
		title: "Favoritos",
		subTitle: "Pokemons favoritos",
	},
	{
		path: "",
		icon: <FaShareNodes size={40} />,
		title: "Algoritmos",
		subTitle: "sección dedicada a resolver algoritmos",
	},
];

export const Sidebar = () => {
	const dispatch = useAppDispatch();
	const {darkMode} = useAppSelector((state) => state.ui);
	const [mounted, setMounted] = useState<boolean>(false);

	const handleToggle = () => {
		dispatch(toggleMode());
	};

	function showThemeMode() {
		return darkMode === "dark" ? (
			<svg
				className="fill-violet-700 block "
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
			</svg>
		) : (
			<svg
				className="h-12 w-12 fill-yellow-500 bg-white rounded-full"
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path
					d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
					fillRule="evenodd"
					clipRule="evenodd"
				></path>
			</svg>
		);
	}

	useEffect(() => {
		setMounted(true);

		return () => {
			localStorage.clear();
		};
	}, []);

	if (!mounted || darkMode === null) return <Skeleton />;

	return (
		<div
			id="menu"
			className="bg-gray-900  z-10 text-slate-300 w-64 left-0 dark:text-white dark:bg-white"
			style={{width: "350px"}}
		>
			<div id="logo" className="p-2 px-6 dark:bg-slate-400">
				<div
					className="flex items-center gap-2 text-lg md:text-2xl font-bold text-white
				"
				>
					<IoLogoReact className="inline-block text-blue-500 rotate-180 animate-spin w-9 " />
					<div className="flex items-center justify-between w-full dark:text-black">
						<div>Dashboard</div>
						<div className="flex justify-center items-center">
							<button
								className="h-12 w-12 dark:bg-white rounded-full "
								onClick={handleToggle}
							>
								{mounted ? showThemeMode() : "Cargando"}
							</button>
						</div>
					</div>
				</div>
			</div>
			<div id="profile" className="px-6 py-10">
				<p className="text-slate-500">Welcome back,</p>
				<Link href="#" className="inline-flex space-x-2 items-center">
					<span>
						<Image
							className="rounded-full w-8 h-8"
							src="/img/develop.PNG"
							alt=""
							height={32}
							width={32}
						/>
					</span>
					<span className="text-sm md:text-base font-bold dark:text-black">
						Anderson Navarro
					</span>
				</Link>
			</div>
			<div id="nav" className="w-full px-6">
				{menuItems.length > 0 &&
					menuItems.map((item, index) => (
						<SidebarMenuItem
							key={index}
							// path={item.path}
							// icon={item.icon}
							// title={item.title}
							// subTitle={item.subTitle}
							{...item}
						/>
					))}
			</div>
			<div className="flex justify-end items-center w-full  mt-10 px-6">
				<ButtonLogOut />
			</div>
		</div>
	);
};
