import React from "react";

const FormLoginContainer = () => {
	return (
		<div className="h-full bg-orange-200 w-full">
			<div>
				<span>Credenciales</span>
				<span>por favor ingrese el correo y la contraseña</span>
			</div>

			<form className="flex flex-col justify-center items-center gap-2 w-full">
				<input type="text" title="Correo electronico" />
				<input type="text" title="Contraseña" />
				<button>Iniciar sesión</button>
				{/* <input type="checkbox" title="Recordar" /> */}
			</form>
		</div>
	);
};

export default FormLoginContainer;
