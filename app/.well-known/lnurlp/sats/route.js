import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const id = "5ab6a5ba-b505-4eb0-83fe-2780073ac926";
    const APIKEY = process.env.ZBD_API_KEY;

    const response = await fetch(
      `https://api.zebedee.io/v0/request-static-charges/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          apikey: APIKEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const payload = await response.json();

    return NextResponse.json(payload);
  } catch (error) {
    console.error("Request failed:", error.message);
    return NextResponse.json({ error: "Request failed." }, { status: 500 });
  }
}
