import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";

export default async function UploadLayout({
  children,
  params,
}: LayoutProps<"/upload/[secret]">) {
  const { secret } = await params;
  if (secret !== process.env.UPLOAD_SECRET) {
    notFound();
  }

  await auth.protect();
  return children;
}
