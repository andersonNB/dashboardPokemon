import Image from "next/image";
import React from "react";
import login from "../../../public/img/login.png";
import FormLoginContainer from "./FormLoginContainer";

const LoginPage = () => {
	return (
		<div className="flex justify-center items-center w-full h-screen bg-slate-300">
			<div className="flex items-center gap-2 bg-[whitesmoke] rounded-md p-2">
				<Image
					src={login}
					alt="imagen login"
					height={300}
					style={{borderRadius: 8}}
				/>
				<div className="h-full">
					<FormLoginContainer />
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
