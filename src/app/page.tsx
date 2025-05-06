import React from "react";
import Image from "next/image";
import {redirect} from "next/navigation";

export default function HomePage() {
	redirect("/dashboard/mainaj");

	return (
		<div>
			<h1>Home</h1>
			<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
		</div>
	);
}
