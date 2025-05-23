import React from "react";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-full  w-full aliased selection:bg-blue-600 selection:text-white">
			<div className="flex w-full min-h-screen justify-center">{children}</div>
		</div>
	);
}
