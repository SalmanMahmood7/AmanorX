import { site } from "@/content/site";
import { pick } from "@/lib/i18n";

const siteContent = pick(site);

// TODO(AmanorX): `url` is a placeholder (.example, RFC 2606) until a real
// domain is assigned. `logo` is omitted entirely -- no vector logo file
// exists yet (see Wordmark component); add it once one does.
export default function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteContent.name,
    alternateName: siteContent.shortName,
    url: "https://www.amanorx.example",
    description: siteContent.description,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
