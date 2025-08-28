import { getUploadAuthParams } from "@imagekit/next/server";
import { error } from "console";

export async function GET() {
  try {
    const authenticationParameter = getUploadAuthParams({
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY as string,
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
    });

    return Response.json({
      authenticationParameter,
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    });
  } catch (err) {
    return Response.json(
      {
        error: "Authentication for Imagekit failed",
      },
      { status: 200 }
    );
  }
}
