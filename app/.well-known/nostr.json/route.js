import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const payload = {
      names: {
        _: "4D992BD1E12F77866334CE3FDFE20203799BFEFB84B7ED5CD111290345157B5A",
      },
    };
    return NextResponse.json(payload);
  } catch (error) {
    return NextResponse.json("Request failed.");
  }
}
