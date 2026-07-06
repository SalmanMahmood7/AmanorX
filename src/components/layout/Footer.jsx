import Link from "next/link";
import Wordmark from "./Wordmark";
import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import { footerContent } from "@/content/site";
import { pick } from "@/lib/i18n";

const footer = pick(footerContent);

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900 text-white/80">
      <Container size="xl" className="py-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Left: logo only -- kept empty otherwise. */}
          <Reveal>
            <Link href="/" aria-label="AmanorX home">
              <Wordmark className="text-3xl text-white" />
            </Link>
          </Reveal>

          {/* Right: Quick Links / Social / Get in Touch, side by side. */}
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-16">
            <Reveal as="nav" delay={80} aria-label="Footer">
              <h2 className="text-sm font-semibold text-white">{footer.quickLinksHeading}</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {footer.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-green-400">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal as="nav" delay={160} aria-label="Social">
              <h2 className="text-sm font-semibold text-white">{footer.socialHeading}</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {footer.socialLinks.map((social) => (
                  <li key={social.label}>
                    {social.disabled ? (
                      <span
                        title="Coming soon"
                        aria-disabled="true"
                        className="cursor-not-allowed text-white/40"
                      >
                        {social.label}
                      </span>
                    ) : (
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-green-400"
                      >
                        {social.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal as="nav" delay={240} aria-label="Get in touch">
              <h2 className="text-sm font-semibold text-white">{footer.contactInfo.heading}</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>{footer.contactInfo.address}</li>
                <li>
                  <a
                    href={`mailto:${footer.contactInfo.email}`}
                    className="transition-colors hover:text-green-400"
                  >
                    {footer.contactInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${footer.contactInfo.phone.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-green-400"
                  >
                    {footer.contactInfo.phone}
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Secondary nav (legal links) + copyright. */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {footer.copyrightHolder}. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {footer.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-green-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
