"use client";
import {useAppDispatch, useAppSelector} from "@/app/store";
import {
	addOne,
	initCounterState,
	substractOne,
} from "@/app/store/counter/counterSlice";
import React, {useEffect} from "react";

interface Props {
	value?: number;
}

export interface CounterResponse {
	method: string;
	count: number;
}

const getApiCounter = async () => {
	const data = await fetch("/api/counter").then((res) => res.json());
	return data as CounterResponse;
};

export const CartCounter = ({value}: Props) => {
	const {count, isReady} = useAppSelector((state) => state.counter);
	const dispatch = useAppDispatch();

	const handleRest = () => {
		if (count === 0) return;

		dispatch(substractOne());
	};

	//inicializando el store con las props
	// useEffect(() => {
	// 	dispatch(initCounterState(value ?? 0));
	// }, [dispatch, value]);

	//Inicializando el store con el
	useEffect(() => {
		getApiCounter().then((data) =>
			dispatch(initCounterState(data.count ?? value))
		);
	}, [dispatch]);

	return (
		<>
			{isReady ? (
				<>
					<span className="text-9xl dark:text-white">{count}</span>
					<div className="flex">
						<button
							className="flex items-center justify-center 
							p-2 rounded-xl bg-gray-900 text-white 
							hover:bg-gray-600 transition-all w-[100px] mr-2
							dark:bg-blue-600 border-zinc-950							
							"
							onClick={() => dispatch(addOne())}
						>
							+1
						</button>
						<button
							className="flex items-center justify-center 
							p-2 rounded-xl bg-gray-900 text-white 
							hover:bg-gray-600 transition-all w-[100px] mr-2
							dark:bg-blue-600 border-zinc-950							
							"
							onClick={handleRest}
						>
							-1
						</button>
					</div>
				</>
			) : (
				<>
					<img
						src="/PacManLoading.svg"
						alt="Cargando..."
						className="w-[200] h-[200] rounded-full"
					/>
					<span className="text-3xl">Cargando...</span>
				</>
			)}
		</>
	);
};
