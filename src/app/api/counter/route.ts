import {NextResponse} from "next/server";

export async function GET(request: Request) {
	console.log(request.method);

	return NextResponse.json({
		count: 100,
		method: "GET",
	});
}
