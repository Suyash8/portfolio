import { redirect } from "next/navigation";

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function RedirectPage({ searchParams }: PageProps) {
  const url = searchParams.url;

  if (!url || Array.isArray(url)) {
    return <p>No valid URL provided</p>;
  }

  redirect(url);
}
