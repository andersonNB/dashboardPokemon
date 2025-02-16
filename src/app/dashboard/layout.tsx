import {Sidebar} from "../components";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex h-full bg-red-600 overflow-y-scroll max-h-screen w-full aliased selection:bg-blue-600 selection:text-white">
			<Sidebar />
			<div className="flex bg-orange-300 w-full">{children}</div>
		</div>
	);
}
