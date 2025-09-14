"use client"; // Directive to mark this as a Client Component for client-side hooks.

import { useEffect } from "react";

// The props are typed inline to avoid conflicts with Next.js's internal types.
export default function RedirectPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const url = searchParams.url;

  useEffect(() => {
    // The redirect logic is placed in a useEffect hook to ensure it runs on the
    // client-side after the component has mounted. This is necessary because
    // direct manipulation of `window.location` is a side effect.
    if (url && typeof url === 'string') {
      try {
        // Validate if the URL is well-formed before redirecting.
        new URL(url);
        window.location.href = url;
      } catch {
        // If the URL is malformed, log an error and do not redirect.
        console.error("Invalid URL for redirection:", url);
      }
    }
  }, [url]); // The effect re-runs only if the `url` search parameter changes.

  // If the URL is invalid or not provided, render a clear error message.
  if (!url || Array.isArray(url) || typeof url !== 'string') {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
        <h2>Invalid Redirect</h2>
        <p>No valid URL was provided to redirect to.</p>
      </div>
    );
  }

  // While the useEffect hook is processing the redirect, show a loading state.
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>Redirecting</h2>
      <p>Please wait while we redirect you...</p>
    </div>
  );
}

