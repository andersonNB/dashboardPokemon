import Image from "next/image";
import React from "react";
import {
	IoBrowsersOutline,
	IoCalculator,
	IoLogoReact,
	IoHeart,
} from "react-icons/io5";
import {SidebarMenuItem} from "./SidebarMenuItem";
import {IoMdExit} from "react-icons/io";
import {MdOutlineCatchingPokemon} from "react-icons/md";

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
];

export const Sidebar = () => {
	return (
		<div
			id="menu"
			className="bg-gray-900  z-10 text-slate-300 w-64 left-0 "
			style={{width: "350px"}}
		>
			<div id="logo" className="my-4 px-6">
				<div className="flex items-center gap-2 text-lg md:text-2xl font-bold text-white">
					<IoLogoReact className="inline-block text-blue-500" />
					<span>
						Dash <span className="text-blue-500">8.</span>
					</span>
				</div>
				<p className="text-slate-500 text-sm">
					Manage your actions and activities
				</p>
			</div>
			<div id="profile" className="px-6 py-10">
				<p className="text-slate-500">Welcome back,</p>
				<a href="#" className="inline-flex space-x-2 items-center">
					<span>
						<Image
							className="rounded-full w-8 h-8"
							src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
							alt=""
							height={32}
							width={32}
						/>
					</span>
					<span className="text-sm md:text-base font-bold">
						Anderson Navarro
					</span>
				</a>
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
		</div>
	);
};
