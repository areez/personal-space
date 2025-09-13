import Head from "next/head";

interface CanonicalURLProps {
  baseURL: string;
  path: string;
}

export function CanonicalURL({ baseURL, path }: CanonicalURLProps) {
  const normalizedBaseURL = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalURL = `${normalizedBaseURL}${normalizedPath}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalURL} />
    </Head>
  );
}

export default CanonicalURL;