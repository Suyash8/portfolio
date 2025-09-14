import { redirect } from "next/navigation";

export default function RedirectPage() {
  const targetUrl = process.env.NEXT_PUBLIC_SIH_REDIRECT_URL;

  if (!targetUrl) {
    return <p>Redirect URL not configured.</p>;
  }

  // Instantly redirect to the predefined URL
  redirect(targetUrl);
}
