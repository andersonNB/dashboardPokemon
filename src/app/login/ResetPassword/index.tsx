import React, {Dispatch, SetStateAction} from "react";

interface Props {
	setAnotherFlow: Dispatch<SetStateAction<number>>;
}

export default function ResetPassword({setAnotherFlow}: Props) {
	return (
		<div className="w-full text-end">
			<button
				className="bg-blue-950 text-white p-3 rounded-lg hover:opacity-80 transition-opacity"
				onClick={() => setAnotherFlow((prev) => prev - 1)}
			>
				indexx
			</button>
		</div>
	);
}
