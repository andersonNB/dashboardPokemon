import Image from "next/image";
import React from "react";
import login from "../../../public/img/login.png";
import FormLoginContainer from "./FormLoginContainer";

const LoginPage = () => {
	return (
		<div className="flex justify-center items-center w-full h-screen">
			<div className="flex items-center gap-2 bg-slate-500 rounded-md p-2 w- ">
				<div className=" h-1/2 w-1/2 ">
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
