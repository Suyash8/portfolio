import { redirect } from "next/navigation";

export default function RedirectPage({ searchParams }: { searchParams: { url?: string } }) {
  const { url } = searchParams;

  if (!url) {
    return <p>No URL provided</p>;
  }

  // Immediately redirect to the given URL
  redirect(url);
}
