import { NextResponse } from "next/server";

export async function GET(request: Request) {

  const responseData = { message: "Hello, world!" };

  return NextResponse.json(responseData);
}

export async function POST(request: Request) {
  const data = await request.json();
  console.log("Received data:", data);

  return NextResponse.json(data);
}
