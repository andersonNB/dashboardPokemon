"use client";
import React, {useRef, useState} from "react";

const PasteUploader = () => {
	const [files, setFiles] = useState<File[]>([]);
	const fileInputRef = useRef<HTMLInputElement>(null);

	function handlePaste(event: React.ClipboardEvent<HTMLDivElement>) {
		const clipboardItems = event.clipboardData?.items;
		if (!clipboardItems) return;

		const pastedFiles: File[] = [];
		for (const item of clipboardItems) {
			if (item.kind === "file") {
				const file = item.getAsFile();
				if (file) pastedFiles.push(file);
			}
		}

		if (pastedFiles.length > 0) {
			setFiles((prev) => [...prev, ...pastedFiles]);
		}
	}

	function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
		const selectedFiles = event.target.files;
		if (!selectedFiles) return;

		setFiles((prev) => [...prev, ...Array.from(selectedFiles)]);
	}

	function handleDrop(event: React.DragEvent<HTMLDivElement>) {
		event.preventDefault();
		const droppedFiles = event.dataTransfer.files;
		if (!droppedFiles) return;

		setFiles((prev) => [...prev, ...Array.from(droppedFiles)]);
	}

	function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
		event.preventDefault(); // Necesario para permitir drop
	}

	function triggerFileInput() {
		fileInputRef.current?.click();
	}

	return (
		<div
			onPaste={handlePaste}
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			className="border-2 border-dashed border-gray-400 p-6 min-h-[300px] flex flex-col items-center justify-center bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100"
			onClick={triggerFileInput}
		>
			<p className="text-gray-600">
				Haz clic, pega (Ctrl+V) o arrastra archivos aquí
			</p>
			<input
				type="file"
				multiple
				ref={fileInputRef}
				onChange={handleFileSelect}
				style={{display: "none"}}
			/>

			{files.length > 0 && (
				<div className="mt-6 flex flex-wrap gap-4 justify-center">
					{files.map((file, index) => (
						<div key={index} className="w-32 text-center">
							{file.type.startsWith("image/") ? (
								<img
									src={URL.createObjectURL(file)}
									alt={file.name}
									className="w-full h-24 object-cover rounded shadow"
								/>
							) : (
								<div className="w-full h-24 flex items-center justify-center bg-gray-200 rounded">
									<span className="text-xs px-2">{file.name}</span>
								</div>
							)}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default PasteUploader;
