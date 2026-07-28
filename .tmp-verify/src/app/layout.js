import { Inter, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";
import AnalyticsScript from "@/components/analytics/AnalyticsScript";
import { site } from "@/content/site";
import { pick } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Display serif for headings, per the navy/gold company-profile design.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const siteContent = pick(site);

export const metadata = {
  title: {
    default: siteContent.name,
    template: `%s | ${siteContent.shortName}`,
  },
  description: siteContent.description,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <OrganizationJsonLd />
        <AnalyticsScript />
        <Header />
        {/* No top padding here on purpose: Header is fixed and floats
            transparent over each page's dark hero (the homepage's video, or
            the navy-900 hero band elsewhere), going solid navy on scroll. */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
