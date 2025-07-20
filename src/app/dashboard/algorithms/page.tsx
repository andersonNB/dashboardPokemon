"use client";
import React from "react";

const AlgorithmsPage = () => {
	const frontEnd = new Set(["JavaScript", "HTML", "CSS"]);
	const backEnd = new Set(["JavaScript", "Python", "Go", "Java"]);

	console.log(frontEnd.intersection(backEnd));

	return (
		<div className="w-full flex items-center justify-center gap-2 dark:text-white text-black  bg-blue-500 h-full p-4">
			{/*En construcción <RiAlarmWarningFill size={40} />*/}

			<div className="grid grid-cols-2 gap-2 w-full bg-teal-500 ">
				<div className="bg-yellow-400">
					{/* Intersección de conjuntos ->
					  Lenguajes que se usan tanto en frontEnd como en backEnd
					*/}
					<h1 className="text-2xl font-bold">Intersección de conjuntos</h1>

					{[...frontEnd.intersection(backEnd)].map((item) => (
						<div key={item}>{item}</div>
					))}
				</div>

				<div className="bg-red-400">
					{/* Unión de conjuntos -> todos los lenguajes en ambos conjuntos sin repetidos
					 */}
					<h1 className="text-2xl font-bold">Unión de conjuntos</h1>
					{[...frontEnd.union(backEnd)].map((item) => (
						<div key={item}>{item}</div>
					))}
				</div>

				<div className="bg-blue-400">
					{/* Diferencia de conjuntos -> lenguajes que están solo en frontEnd */}
					<h1 className="text-2xl font-bold">Diferencia de conjuntos</h1>
					{[...frontEnd.difference(backEnd)].map((item) => (
						<div key={item}>{item}</div>
					))}
				</div>

				<div className="bg-amber-600">
					{/* Exclusivos de front o de back pero no de ambos */}
					<h1 className="text-2xl font-bold">Exclusivos</h1>
					{[...frontEnd.symmetricDifference(backEnd)].map((item) => (
						<div key={item}>{item} </div>
					))}
				</div>

				<div className="bg-amber-600">
					{/* ¿Están todos los lenguajes frontend en backend */}
					<h1 className="text-2xl font-bold">
						Todos los lenguajes de front en back
					</h1>
					{frontEnd.isSubsetOf(backEnd) ? "verdadero" : "falso"}
				</div>

				<div className="bg-fuchsia-400">
					{/* ¿Están todos los lenguajes frontend en backend */}
					<h1 className="text-2xl font-bold">
						Front incluye todos los lenguajes backend?
					</h1>
					{frontEnd.isSupersetOf(backEnd) ? "verdadero" : "falso"}
				</div>

				<div className="bg-green-500">
					{/* ¿Están todos los lenguajes frontend en backend */}
					<h1 className="text-2xl font-bold">
						Verifica si no comparten ningún lenguaje
					</h1>
					{frontEnd.isDisjointFrom(backEnd) ? "verdadero" : "falso"}
				</div>
			</div>
		</div>
	);
};

export default AlgorithmsPage;
