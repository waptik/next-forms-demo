import { registerEvent } from "@/app/luma";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams: Record<string, string> = {};

  request.nextUrl.searchParams.forEach((value, key) => {
    if (["name", "email"].includes(key)) {
      searchParams[key] = value;
    }
  });

  if (Object.keys(searchParams).length !== 2) {
    return notFound();
  }

  try {
    const guest = await registerEvent(searchParams.email, searchParams.name);
    return NextResponse.json(guest);
  } catch (e) {
    const error = e as Error;
    return NextResponse.json({ error: { message: error.message } });
  }
}
