import React from "react";

const Skeleton = () => {
	return (
		<div
			role="status"
			className="space-y-1 border
             flex
             flex-col             
             border-gray-200 divide-y
              divide-gray-200 
              rounded-sm shadow-sm 
              animate-pulse
               dark:divide-gray-700 md:p-6 dark:border-gray-700
               bg-gray-900
               w-[350px]
               justify-around
               "
		>
			<div className="flex items-center justify-center mt-4">
				<svg
					className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
				</svg>
				<div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
				<div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
			</div>
			{Array.from([1, 2, 3, 4, 5]).map((_, i) => {
				return (
					<div
						key={"status" + i}
						className="flex items-center justify-between pt-4"
					>
						<div>
							<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
							<div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
						</div>
						<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
					</div>
				);
			})}

			<span className="sr-only">Loading...</span>
		</div>
	);
};

export default Skeleton;
