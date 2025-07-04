"use client";
import React, {useState} from "react";
import {useRouter} from "next/navigation";

const FormLoginContainer = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(email, password);
		router.push("/dashboard");
	};

	return (
		<div className="flex gap-4 flex-col w-full h-full rounded-lg text-blue-950 px-4">
			<div className="flex w-full flex-col">
				<span className="text-3xl font-bold w-full">Credenciales</span>
				<span className="w-full text-gray-400 opacity-25 ">
					por favor ingrese el correo y la contraseña.
				</span>
			</div>

			<form
				className="flex flex-col gap-3 justify-center h-[70%]"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					title="Email"
					placeholder="Email"
					className="h-12 p-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Contraseña"
					className="h-12 p-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div className="w-full text-end">
					<button className="bg-blue-950 text-white p-3 rounded-lg hover:opacity-80 transition-opacity">
						Iniciar sesión
					</button>
				</div>
				<div className="flex gap-2 items-center w-full justify-end">
					<a
						href="#"
						className="text-blue-950 text-sm  hover:underline hover:text-blue-500 transition-all"
					>
						¿Olvidaste tu contraseña?
					</a>
				</div>
			</form>
		</div>
	);
};

export default FormLoginContainer;
