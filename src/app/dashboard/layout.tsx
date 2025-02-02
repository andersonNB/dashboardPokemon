import {Sidebar} from "../components";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-slate-100 overflow-y-scroll antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
			<div className="flex">
				<Sidebar />
				{children}
			</div>
		</div>
	);
}
