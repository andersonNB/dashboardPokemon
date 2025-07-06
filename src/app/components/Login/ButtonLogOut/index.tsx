import {useRouter} from "next/navigation";
import React from "react";
import {FaSignOutAlt} from "react-icons/fa";

export const ButtonLogOut = () => {
	const router = useRouter();

	return (
		<button
			className="bg-red-500 flex items-center justify-center gap-2 w-[80px] h-[32px] rounded-lg text-white dark:text-black"
			onClick={() => router.push("/")}
		>
			<FaSignOutAlt /> Salir
		</button>
	);
};
