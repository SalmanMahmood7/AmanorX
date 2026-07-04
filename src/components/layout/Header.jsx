"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/content/site";
import { pick } from "@/lib/i18n";

const nav = pick(primaryNav);

// Mobile menu stays a flat link list; dropdown groups only exist on desktop.
const mobileNav = nav.flatMap((item) => item.children ?? [item]);

/**
 * Glass ("liquid-glass") navbar. Logo and nav links are AmanorX's real
 * identity/pages; the glass-bar chrome (and the video hero underneath on
 * the homepage) was recreated from a supplied hero spec -- see
 * AnimatedHeading/FadeIn for that part.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 pt-6 text-white md:px-12 lg:px-16">
      {/* Dropdown panels must escape the bar, so the glass container's
          unlayered overflow:hidden is overridden inline; the collapsible
          search/menu rows below keep their own overflow clipping. */}
      <div className="liquid-glass rounded-xl" style={{ overflow: "visible" }}>
        <div className="flex items-center justify-between px-4 py-2">
          <Link href="/" className="text-2xl font-semibold tracking-tight">
            AmanorX
          </Link>

          <nav className="hidden xl:block" aria-label="Primary">
            <ul className="flex items-center gap-6 text-sm">
              {nav.map((item) => {
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
                        className={`flex items-center gap-1 transition-colors ${
                          groupActive ? "text-green-400" : "text-white/80 hover:text-gray-300"
                        }`}
                      >
                        {item.label}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover:rotate-180"
                        >
                          <path
                            d="M6 9l6 6 6-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                      {/* pt-2 keeps the hover path unbroken between the
                          trigger and the panel; shown on hover and on
                          keyboard focus within the group. */}
                      <div className="invisible absolute top-full left-0 pt-2 opacity-0 transition-[opacity,visibility] duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                        <ul className="liquid-glass min-w-44 rounded-xl py-2">
                          {item.children.map((child) => {
                            const childActive = pathname === child.href;
                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  aria-current={childActive ? "page" : undefined}
                                  className={`block px-4 py-2 whitespace-nowrap transition-colors ${
                                    childActive
                                      ? "text-green-400"
                                      : "text-white/80 hover:bg-white/10 hover:text-green-400"
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
                        className="block cursor-not-allowed text-white/40"
                        title="Coming soon"
                        aria-disabled="true"
                      >
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`block transition-colors ${
                          active ? "text-green-400" : "text-white/80 hover:text-gray-300"
                        }`}
                      >
                        {item.label}
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
              className="cursor-pointer rounded-full p-2 transition-colors hover:bg-white/10 hover:text-green-400"
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

            <button
              type="button"
              className="cursor-pointer rounded-full p-2 transition-colors hover:bg-white/10 hover:text-green-400 xl:hidden"
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
              className="flex items-center gap-3 border-t border-white/10 px-4 py-3.5"
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
                className="cursor-pointer rounded-lg bg-white px-4 py-1.5 text-sm font-medium text-black transition-colors hover:bg-gray-100"
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
            <ul className="space-y-1 border-t border-white/10 px-4 py-4 text-sm">
              {mobileNav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    {item.disabled ? (
                      <span
                        className="block rounded-lg px-2 py-2 text-white/40"
                        title="Coming soon"
                        aria-disabled="true"
                      >
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`block rounded-lg px-2 py-2 transition-colors ${
                          active ? "bg-white/10 text-green-400" : "hover:bg-white/5 hover:text-green-400"
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
      </div>
    </header>
  );
}
