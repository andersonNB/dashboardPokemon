import Image from "next/image";
import React from "react";
import login from "../../../public/img/login.png";
import FormLoginContainer from "./FormLoginContainer";

const LoginPage = () => {
	return (
		<div className="flex justify-center items-center w-full h-screen">
			<div className="flex gap-2 bg-white rounded-md p-3 w-4/5 h-[600px]  border border-gray-300 shadow-lg">
				<div className="h-[95%]">
					<Image src={login} alt="imagen login" style={{borderRadius: 8}} />
				</div>
				<div className="flex items-center justify-center h-full w-full border border-gray-300 rounded-md">
					<FormLoginContainer />
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
