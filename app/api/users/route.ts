import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log("GET function called.");

  // Handle the GET request logic here
  const responseData = { message: "Hello, world!" };

  return NextResponse.json(responseData);
}

export async function POST(request: Request) {
  console.log("POST function called.");

  const data = await request.json();
  console.log("Received data:", data);

  return NextResponse.json(data);
}
