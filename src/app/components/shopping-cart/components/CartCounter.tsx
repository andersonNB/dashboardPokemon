"use client";
import React, {useState} from "react";

interface Props {
	value?: number;
}

export const CartCounter = ({value}: Props) => {
	const [count, setCount] = useState(value || 0);

	const handleRest = () => {
		if (count === 0) return;

		setCount(count - 1);
	};

	return (
		<>
			<span className="text-9xl">{count}</span>
			<div className="flex">
				<button
					className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
					onClick={() => setCount(count + 1)}
				>
					+1
				</button>
				<button
					className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
					onClick={handleRest}
				>
					-1
				</button>
			</div>
		</>
	);
};
