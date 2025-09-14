import { redirect } from "next/navigation";

export default function RedirectPage({
  searchParams,
}: {
  searchParams: { url?: string };
}) {
  if (!searchParams.url) {
    return <p>No URL provided</p>;
  }

  redirect(searchParams.url);
}
