import React from "react";
import backgroundLogo from "../../../public/next.svg";
import Image from "next/image";

export default function DashboardPage() {
	return (
		<div className="relative flex items-center justify-center w-full min-h-screen">
			<Image
				src={backgroundLogo}
				alt="Background"
				className="bg-cover bg-center dark:text-white  "
				priority
			/>
		</div>
	);
}
