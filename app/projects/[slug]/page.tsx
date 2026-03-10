import { redirect } from "next/navigation";

export default async function CanonicalProjectRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/pt/projects/${slug}`);
}
