import Link from "next/link";
import { useId, useState, useEffect } from "react";
import { Bars3Icon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { siteConfig } from "../configuration/site-config";

export default function Header() {
  const navId = useId();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "py-1 shadow-md border-b border-neutral-100" : "py-4"
      }`}
    >
      <nav className="container mx-auto flex items-center px-6 lg:px-8">
        <Link
          href="/"
          className={`font-bold text-neutral-900 no-underline transition-all duration-300 ${
            scrolled ? "text-base" : "text-lg"
          }`}
        >
          {siteConfig.businessName}
        </Link>

        <div className="ml-6 hidden text-sm font-medium text-neutral-400 uppercase tracking-widest lg:block">
          Dudley & West Midlands
        </div>

        <button
          type="button"
          className="ml-auto inline-flex items-center justify-center rounded p-2 text-black lg:hidden"
          aria-controls={navId}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? (
            <XMarkIcon style={{ width: "1.5rem", height: "1.5rem" }} />
          ) : (
            <Bars3Icon style={{ width: "1.5rem", height: "1.5rem" }} />
          )}
        </button>

        <div
          id={navId}
          className={`${
            open ? "block shadow-lg border-t border-neutral-100" : "hidden"
          } absolute left-0 top-full w-full bg-white px-4 pb-6 lg:static lg:ml-auto lg:block lg:w-auto lg:p-0 lg:shadow-none lg:border-none`}
        >
          <div className="mt-4 flex flex-col gap-4 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
            <Link
              href="/"
              className="text-sm font-semibold tracking-wide text-neutral-700 no-underline hover:text-(--primary) lg:py-2"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="text-sm font-semibold tracking-wide text-neutral-700 no-underline hover:text-(--primary) lg:py-2"
            >
              Services
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-semibold tracking-wide text-neutral-700 no-underline hover:text-(--primary) lg:py-2"
            >
              Contact
            </Link>

            <Link
              href="/#contact"
              className="rounded-sm bg-(--primary) px-6 py-2.5 text-sm font-bold text-white no-underline shadow-sm hover:bg-(--primary-lighter) transition-all hover:-translate-y-0.5"
            >
              Request a Callout
            </Link>

            <a
              className="inline-flex items-center gap-2 text-base font-bold text-(--primary) no-underline hover:text-(--primary-lighter)"
              href={siteConfig.contact.telLinkMobile}
            >
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
              <span>{siteConfig.contact.mobile}</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
