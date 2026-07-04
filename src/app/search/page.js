import Link from "next/link";
import PageShell from "@/components/shared/PageShell";
import TextLink from "@/components/shared/TextLink";
import Reveal from "@/components/shared/Reveal";
import { searchSite } from "@/lib/search";

export const metadata = {
  title: "Search",
};

function ResultBody({ result }) {
  return (
    <>
      <span className="font-mono text-xs font-medium tracking-wide text-green-600 uppercase">
        {result.type}
      </span>
      <h2 className="mt-2 text-lg font-semibold text-navy-900">{result.title}</h2>
      {result.description ? (
        <p className="mt-2 text-sm leading-relaxed text-navy-700">{result.description}</p>
      ) : null}
    </>
  );
}

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = typeof params?.q === "string" ? params.q : "";
  const results = query ? searchSite(query) : [];

  return (
    <PageShell
      heading="Search"
      description={
        query
          ? `${results.length} result${results.length === 1 ? "" : "s"} for “${query}”`
          : "Search pages, sectors, and portfolio companies across the group."
      }
    >
      {!query ? (
        <p className="text-navy-700">
          Enter a search term using the search icon in the navigation bar above.
        </p>
      ) : results.length === 0 ? (
        <p className="text-navy-700">
          No results for &ldquo;{query}&rdquo;. Try a different term, or browse{" "}
          <TextLink href="/sectors">Sectors</TextLink> or{" "}
          <TextLink href="/portfolio">Portfolio</TextLink> directly.
        </p>
      ) : (
        <div className="space-y-4">
          {results.map((result) => (
            <Reveal key={`${result.type}-${result.title}`}>
              {result.external ? (
                <a
                  href={result.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-t-2 border-navy-900/15 border-t-green-500 bg-white p-6 transition-colors duration-300 hover:bg-navy-50 sm:p-7"
                >
                  <ResultBody result={result} />
                </a>
              ) : (
                <Link
                  href={result.href}
                  className="group block border border-t-2 border-navy-900/15 border-t-green-500 bg-white p-6 transition-colors duration-300 hover:bg-navy-50 sm:p-7"
                >
                  <ResultBody result={result} />
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      )}
    </PageShell>
  );
}
