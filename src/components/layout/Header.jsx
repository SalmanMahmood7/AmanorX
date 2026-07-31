"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Wordmark from "./Wordmark";
import { primaryNav } from "@/content/site";
import { pick } from "@/lib/i18n";

const nav = pick(primaryNav);

// The deck-style bar promotes Contact from a nav link to the gold CTA on
// the right, so it's dropped from the desktop link row (mobile keeps it in
// the flat list, where there's no CTA slot).
const desktopNav = nav.filter((item) => item.href !== "/contact");

// Mobile menu stays a flat link list; dropdown groups only exist on desktop.
const mobileNav = nav.flatMap((item) => item.children ?? [item]);

/**
 * Deck-style navbar (July 2026 navy/gold redesign): a full-width bar that
 * sits transparent over each page's dark hero and turns solid navy with a
 * hairline divider once the page scrolls (or while a panel is open, so the
 * search/menu rows never float on transparency). Uppercase tracked links,
 * gold active/hover states, and a gold Contact CTA replace the earlier
 * floating liquid-glass pill.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const searchRowId = useId();
  const searchInputRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setSearchOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open || searchOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300 ${
        solid
          ? "border-b border-white/10 bg-navy-950/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="flex h-16 items-center justify-between px-6 md:px-12 lg:h-[4.5rem] lg:px-16 xl:px-10 2xl:px-16">
        <Link href="/" className="text-lg">
          <Wordmark />
        </Link>

        <nav className="hidden xl:block" aria-label="Primary">
          <ul className="flex items-center gap-5 text-xs font-semibold tracking-[0.18em] whitespace-nowrap uppercase 2xl:gap-8">
            {desktopNav.map((item) => {
              const active = pathname === item.href;

              if (item.children) {
                const groupActive = item.children.some(
                  (child) => child.href === pathname
                );
                return (
                  <li key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      aria-haspopup="true"
                      aria-current={active ? "page" : undefined}
                      className={`relative flex items-center gap-1.5 py-2 transition-colors ${
                        groupActive
                          ? "text-gold-400"
                          : "text-white/70 hover:text-gold-400"
                      }`}
                    >
                      {item.label}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:rotate-180"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {groupActive ? (
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-0.5 bg-gold-500"
                        />
                      ) : null}
                    </Link>
                    {/* pt-3 keeps the hover path unbroken between the
                        trigger and the panel; shown on hover and on
                        keyboard focus within the group. */}
                    <div className="invisible absolute top-full left-0 pt-3 opacity-0 transition-[opacity,visibility] duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <ul className="min-w-52 rounded-lg border border-white/10 bg-navy-900/95 py-2 shadow-2xl backdrop-blur-md">
                        {item.children.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                aria-current={childActive ? "page" : undefined}
                                className={`block border-l-2 px-4 py-2.5 whitespace-nowrap normal-case tracking-normal transition-colors ${
                                  childActive
                                    ? "border-gold-500 text-gold-400"
                                    : "border-transparent text-white/75 hover:border-gold-500 hover:bg-white/5 hover:text-gold-400"
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  {item.disabled ? (
                    <span
                      className="block cursor-not-allowed py-2 text-white/35"
                      title="Coming soon"
                      aria-disabled="true"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative block py-2 transition-colors ${
                        active
                          ? "text-gold-400"
                          : "text-white/70 hover:text-gold-400"
                      }`}
                    >
                      {item.label}
                      {active ? (
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-0.5 bg-gold-500"
                        />
                      ) : null}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="cursor-pointer rounded-full p-2 transition-colors hover:bg-white/10 hover:text-gold-400"
            aria-expanded={searchOpen}
            aria-controls={searchRowId}
            onClick={() => setSearchOpen((current) => !current)}
          >
            <span className="sr-only">{searchOpen ? "Close search" : "Search"}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {searchOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M21 21l-4.35-4.35"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>

          <Link
            href="/contact"
            className="btn-gold-shimmer hidden rounded-lg px-5 py-2 text-xs font-semibold tracking-[0.18em] text-navy-950 uppercase xl:block"
          >
            Contact
          </Link>

          <button
            type="button"
            className="cursor-pointer rounded-full p-2 transition-colors hover:bg-white/10 hover:text-gold-400 xl:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((current) => !current)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id={searchRowId}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out-expo ${
          searchOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <form
            action="/search"
            method="GET"
            role="search"
            className="flex items-center gap-3 border-t border-white/10 px-6 py-3.5 md:px-12 lg:px-16"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="shrink-0 text-white/50"
            >
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path
                d="M21 21l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <input
              ref={searchInputRef}
              type="search"
              name="q"
              placeholder="Search the site"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              tabIndex={searchOpen ? 0 : -1}
            />
            <button
              type="submit"
              className="btn-gold-shimmer cursor-pointer rounded-lg px-4 py-1.5 text-sm font-medium text-navy-950"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <nav
        id={menuId}
        aria-label="Primary"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out-expo xl:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <ul className="space-y-1 border-t border-white/10 px-6 py-4 text-sm md:px-12">
            {mobileNav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  {item.disabled ? (
                    <span
                      className="block border-l-2 border-transparent px-3 py-2 text-white/35"
                      title="Coming soon"
                      aria-disabled="true"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`block border-l-2 px-3 py-2 transition-colors ${
                        active
                          ? "border-gold-500 bg-white/5 text-gold-400"
                          : "border-transparent hover:border-gold-500 hover:bg-white/5 hover:text-gold-400"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
