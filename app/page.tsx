import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const acceptLanguage = (await headers()).get("accept-language") || "";
  const preferredLocale = acceptLanguage.toLowerCase().includes("en") ? "en" : "pt";

  redirect(`/${preferredLocale}`);
}
