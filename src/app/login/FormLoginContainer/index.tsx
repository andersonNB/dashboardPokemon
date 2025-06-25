import React from "react";

const FormLoginContainer = () => {
	return (
		<div className="flex gap-4 flex-col bg-orange-200 w-full h-full rounded-lg text-blue-950 px-4">
			<div className="flex w-full flex-col">
				<span className="text-3xl font-bold w-full">Credenciales</span>
				<span className="w-full text-gray-400 opacity-25 ">
					por favor ingrese el correo y la contraseña
				</span>
			</div>

			<form className="flex flex-col gap-3 h-full">
				<input
					type="text"
					title="Email"
					placeholder="Email"
					className="h-12 p-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<input
					type="password"
					title="Contraseña"
					placeholder="Contraseña"
					className="h-12 p-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<div className="w-full text-end">
					<button className="bg-blue-950 text-white p-3 rounded-lg hover:opacity-80 transition-opacity">
						Iniciar sesión
					</button>
				</div>
				<div className="flex gap-2 items-center w-full justify-end">
					{/* <a href="#">¿Has olvidado la contraseña?</a> */}
				</div>
			</form>
		</div>
	);
};

export default FormLoginContainer;
