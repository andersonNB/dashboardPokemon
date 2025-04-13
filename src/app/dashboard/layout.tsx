export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-full bg-red-600 w-full aliased selection:bg-blue-600 selection:text-white">
			<div className="flex bg-orange-300 w-full min-h-screen justify-center">
				{children}
			</div>
		</div>
	);
}
