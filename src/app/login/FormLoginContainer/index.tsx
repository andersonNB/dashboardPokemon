"use client";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import {useAppSelector} from "@/app/store";

const FormLoginContainer = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isVisible, setIsVisible] = useState(false);
	const [error, setError] = useState<{email: string; password: string}>({
		email: "",
		password: "",
	});
	const router = useRouter();
	const {user} = useAppSelector((state) => state.login);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!checkEmail(email) || user.email !== email) {
			setError({...error, email: "El correo no es válido"});
			return;
		}
		if (password.length < 8 || user.password !== password) {
			setError({
				...error,
				password:
					password.length < 8
						? "La contraseña debe tener al menos 8 caracteres"
						: "La contraseña es incorrecta",
			});
			return;
		}
		router.push("/dashboard");
	};

	const checkEmail = (email: string) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};

	return (
		<div className="flex gap-4 flex-col w-full h-full rounded-lg text-blue-950 px-4">
			<div className="flex w-full flex-col">
				<span className="text-3xl font-bold w-full">Credenciales</span>
				<span className="w-full text-gray-600 opacity-90 ">
					por favor ingrese el correo y la contraseña.
				</span>
			</div>

			<form
				className="flex flex-col gap-3 justify-center h-[70%]"
				onSubmit={handleSubmit}
			>
				<input
					type="email"
					title="Correo electrónico"
					placeholder="Correo electrónico"
					className={`h-12 p-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500
					  ${error.email && "border-red-500"}`}
					required
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
						setError({...error, email: ""});
					}}
				/>
				{error.email ? (
					<span className="text-red-500 text-sm">{error.email}</span>
				) : (
					<span className="text-sm">&nbsp;</span>
				)}
				<div className="relative">
					<input
						type={isVisible ? "text" : "password"}
						placeholder="Contraseña"
						className={`h-12 p-1 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${
							error.password && "border-red-500"
						} `}
						required
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
							setError({...error, password: ""});
						}}
					/>
					{isVisible ? (
						<FaRegEye
							className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer hover:text-gray-700"
							onClick={() => setIsVisible(!isVisible)}
						/>
					) : (
						<FaRegEyeSlash
							className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer hover:text-gray-700"
							onClick={() => setIsVisible(!isVisible)}
						/>
					)}
				</div>
				{error.password ? (
					<span className="text-red-500 text-sm">{error.password}</span>
				) : (
					<span className="text-sm">&nbsp;</span>
				)}
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
