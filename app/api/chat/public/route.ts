import { error } from "console";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function POST(req: Request) {
  const authHeader = req.headers.get("Authorization");

  const token = authHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json(
      { error: "Missing session token" },
      { status: 401 },
    );
  }

  let widgetId: string | undefined;
  let sessionId: string | undefined;

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const { payload } = await jwtVerify(token, secret);
    sessionId = payload.sessionId as string;
    widgetId = payload.widgetId as string;

    if (!sessionId || !widgetId) {
      throw new Error("Invalid Token Payload");
    }
  } catch (error) {
    console.error(
      "Toke verification failed error. Expire session token",
      error,
    );
    return NextResponse.json(
      { error: "Invalid or expired session token" },
      { status: 401 },
    );
  }

  let {messages,knowledge_source_ids} = await req.json(); 
  const lastMessage = messages[messages.length - 1];

  if(!lastMessage || lastMessage.role !== "user"){
    console.log("No new user message detected or invalid format")
  }

  try {
    
  } catch (error) {
    
  }
}
