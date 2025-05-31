import {NextResponse} from "next/server";

export async function GET(request: Request) {
	return NextResponse.json({
		request: request.method,
	});
}

export async function POST(request: Request) {
	return NextResponse.json({
		hola: "Mundo",
		method: request.method,
		status: request.headers,
	});
}
