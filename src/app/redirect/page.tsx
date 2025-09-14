// This component uses a meta refresh tag for redirection, which is a robust
// method that avoids issues with the build environment's module resolution.
// No imports from 'next/navigation' are needed.

export default function RedirectPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const url = searchParams.url;

  // Validate the URL on the server.
  // If the 'url' parameter is missing, is an array, or is not a string,
  // we render an error message instead of attempting a redirect.
  if (!url || Array.isArray(url) || typeof url !== 'string') {
    return (
      <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
        <h2>Invalid Redirect Request</h2>
        <p>A valid URL was not provided in the request.</p>
      </div>
    );
  }

  // If the URL is valid, we render a component that includes a meta tag.
  // Next.js will automatically place this meta tag in the document's <head>.
  // The 'content' attribute tells the browser to redirect immediately.
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${url}`} />
      <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
        <h2>Redirecting...</h2>
        <p>
          If you are not redirected automatically, please{' '}
          <a href={url}>click here</a>.
        </p>
      </div>
    </>
  );
}

