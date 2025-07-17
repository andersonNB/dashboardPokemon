"use client";
import React from "react";

const AlgorithmsPage = () => {
	const frontEnd = new Set(["JavaScript", "HTML", "CSS"]);
	const backEnd = new Set(["JavaScript", "Python", "Go", "Java"]);

	console.log(frontEnd.intersection(backEnd));

	return (
		<div className="w-full flex items-center justify-center gap-2 dark:text-white text-black  bg-blue-500 h-full p-4">
			{/*En construcción <RiAlarmWarningFill size={40} />*/}

			<div className="grid grid-cols-4 gap-2 w-full bg-teal-500 ">
				{/* Intersección de conjuntos */}
				<h1 className="text-2xl font-bold">Intersección de conjuntos</h1>

				{[...frontEnd.intersection(backEnd)].map((item) => (
					<div key={item}>{item}</div>
				))}

				{/* Diferencia de conjuntos */}
				<h1 className="text-2xl font-bold">Diferencia de conjuntos</h1>
				{[...frontEnd.difference(backEnd)].map((item) => (
					<div key={item}>{item}</div>
				))}

				{/* Unión de conjuntos */}
				<h1 className="text-2xl font-bold">Unión de conjuntos</h1>
				{[...frontEnd.union(backEnd)].map((item) => (
					<div key={item}>{item}</div>
				))}

				{/* Subconjunto */}
				<h1 className="text-2xl font-bold">Subconjunto</h1>
				{frontEnd.isSubsetOf(backEnd) && (
					<div>frontEnd es subconjunto de backEnd</div>
				)}
			</div>
		</div>
	);
};

export default AlgorithmsPage;
