import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const id = "d94e7893-5a1a-4ef9-b2c2-e549fc6b1e0e";
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
