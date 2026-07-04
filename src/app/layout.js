import { Inter, Geist_Mono } from "next/font/google";
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
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <OrganizationJsonLd />
        <AnalyticsScript />
        <Header />
        {/* No top padding here on purpose: Header is fixed and floats over
            each page's hero (glass over the homepage's video, or over the
            navy-900 hero band elsewhere). */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
