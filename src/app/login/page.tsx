import Image from "next/image";
import React from "react";
import login from "../../../public/img/login.png";
import FormLoginContainer from "./FormLoginContainer";

const LoginPage = () => {
	return (
		<div className="flex justify-center items-center w-full h-screen bg-rose-400 ">
			<div className="flex gap-2 bg-slate-500 rounded-md p-3 w-4/5 h-[600px] ">
				<div className="h-full">
					<Image src={login} alt="imagen login" style={{borderRadius: 8}} />
				</div>
				<div className="h-full w-full bg-red-400">
					<FormLoginContainer />
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
