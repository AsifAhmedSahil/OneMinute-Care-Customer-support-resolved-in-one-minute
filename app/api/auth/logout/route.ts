import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  cookieStore.delete("user_session");

  // Redirect to homepage after deleting cookie
  const response = NextResponse.redirect("https://one-minute-care.vercel.app");
  response.headers.set("Cache-Control", "no-store");
  return response;
}
