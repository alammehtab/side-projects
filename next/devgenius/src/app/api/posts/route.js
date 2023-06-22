// NOTE: here the file name must be route.js
// apis do follow the folder structure for path
// so this api can be accessed at http://localhost:3000/api/posts

import { NextResponse } from "next/server";

export const GET = async (req) => {
  return new NextResponse("It works", { status: 200 });
};
