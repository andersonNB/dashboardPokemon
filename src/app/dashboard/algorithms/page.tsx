"use client";
import React, {useMemo, useState} from "react";
import {
	DndContext,
	closestCenter,
	PointerSensor,
	KeyboardSensor,
	useSensor,
	useSensors,
	DragEndEvent,
} from "@dnd-kit/core";
import {
	SortableContext,
	useSortable,
	verticalListSortingStrategy,
	arrayMove,
} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

const DraggableItem = ({id}: {id: string}) => {
	const {attributes, listeners, setNodeRef, transform, transition} =
		useSortable({id});

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		padding: "8px",
		backgroundColor: "#fff",
		border: "1px solid #ccc",
		marginBottom: "4px",
		borderRadius: "4px",
		cursor: "grab",
	};

	return (
		<div ref={setNodeRef} style={style} {...attributes} {...listeners}>
			{id}
		</div>
	);
};

const AlgorithmsPage = () => {
	const [frontEnd, setFrontEnd] = useState(["JavaScript", "HTML", "CSS"]);
	const [backEnd, setBackEnd] = useState(["Python", "Go", "Java"]);

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor)
	);

	const intersection = useMemo(
		() => frontEnd.filter((item) => backEnd.includes(item)),
		[frontEnd, backEnd]
	);

	const union = useMemo(
		() => Array.from(new Set([...frontEnd, ...backEnd])),
		[frontEnd, backEnd]
	);

	const difference = useMemo(
		() => frontEnd.filter((item) => !backEnd.includes(item)),
		[frontEnd, backEnd]
	);

	const symmetricDifference = useMemo(() => {
		const onlyFront = frontEnd.filter((item) => !backEnd.includes(item));
		const onlyBack = backEnd.filter((item) => !frontEnd.includes(item));
		return [...onlyFront, ...onlyBack];
	}, [frontEnd, backEnd]);

	const isSubset = frontEnd.every((item) => backEnd.includes(item));
	const isSuperset = backEnd.every((item) => frontEnd.includes(item));
	const isDisjoint = !frontEnd.some((item) => backEnd.includes(item));

	const handleDragEnd = (event: DragEndEvent) => {
		const {active, over} = event;
		if (!over || active.id === over.id) return;

		const fromList = frontEnd.includes(active.id as string)
			? frontEnd
			: backEnd;
		const toList = frontEnd.includes(over.id as string) ? frontEnd : backEnd;
		const setFrom = frontEnd.includes(active.id as string)
			? setFrontEnd
			: setBackEnd;
		const setTo = frontEnd.includes(over.id as string)
			? setFrontEnd
			: setBackEnd;

		if (fromList === toList) {
			const oldIndex = fromList.indexOf(active.id as string);
			const newIndex = fromList.indexOf(over.id as string);
			setFrom(arrayMove(fromList, oldIndex, newIndex));
		} else {
			const newFrom = fromList.filter((i) => i !== active.id);
			const newTo = [...toList, active.id as string];
			setFrom(newFrom);
			setTo(newTo);
		}
	};

	return (
		<div className="p-6 bg-gray-100 min-h-screen text-black">
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
			>
				<div className="grid grid-cols-2 gap-6">
					{/* Frontend */}
					<div className="bg-yellow-200 p-4 rounded">
						<h2 className="text-xl font-bold mb-2">Frontend</h2>
						<SortableContext
							items={frontEnd}
							strategy={verticalListSortingStrategy}
						>
							{frontEnd.map((item) => (
								<DraggableItem key={item} id={item} />
							))}
						</SortableContext>
					</div>

					{/* Backend */}
					<div className="bg-red-200 p-4 rounded">
						<h2 className="text-xl font-bold mb-2">Backend</h2>
						<SortableContext
							items={backEnd}
							strategy={verticalListSortingStrategy}
						>
							{backEnd.map((item) => (
								<DraggableItem key={item} id={item} />
							))}
						</SortableContext>
					</div>
				</div>
			</DndContext>
			{/* Resultados */}
			<div className="mt-6 grid grid-cols-3 gap-4">
				<div className="bg-blue-300 p-4 rounded">
					<h3 className="font-bold">Intersección</h3>
					{intersection.map((item) => (
						<div key={item}>{item}</div>
					))}
				</div>
				<div className="bg-green-300 p-4 rounded">
					<h3 className="font-bold">Unión</h3>
					{union.map((item) => (
						<div key={item}>{item}</div>
					))}
				</div>
				<div className="bg-purple-300 p-4 rounded">
					<h3 className="font-bold">Diferencia (Front - Back)</h3>
					{difference.map((item) => (
						<div key={item}>{item}</div>
					))}
				</div>
				<div className="bg-pink-300 p-4 rounded">
					<h3 className="font-bold">Exclusivos</h3>
					{symmetricDifference.map((item) => (
						<div key={item}>{item}</div>
					))}
				</div>
				<div className="bg-orange-300 p-4 rounded">
					<h3 className="font-bold">¿Front es subconjunto de Back?</h3>
					{isSubset ? "✅ Sí" : "❌ No"}
				</div>
				<div className="bg-fuchsia-300 p-4 rounded">
					<h3 className="font-bold">¿Front es superconjunto de Back?</h3>
					{isSuperset ? "✅ Sí" : "❌ No"}
				</div>
				<div className="bg-lime-300 p-4 rounded">
					<h3 className="font-bold">¿Son disjuntos?</h3>
					{isDisjoint ? "✅ Sí" : "❌ No"}
				</div>
			</div>
		</div>
	);
};

export default AlgorithmsPage;
