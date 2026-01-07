import Link from "next/link";
import { useId, useState } from "react";
import { Bars3Icon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";

import InlineIcon from "./InlineIcon";

export default function Header() {
  const navId = useId();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="container mx-auto flex items-center px-4 py-3">
        <Link href="/" className="text-lg font-bold text-black no-underline">
          Domestic & Commercial Drain Services
        </Link>

        <div className="ml-4 hidden text-base font-normal text-black lg:block">
          West Midlands
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
            open ? "block" : "hidden"
          } w-full lg:ml-6 lg:block lg:w-auto`}
        >
          <div className="mt-3 flex flex-col gap-2 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
            <Link
              href="/"
              className="text-black no-underline hover:text-[var(--primary-lighter)]"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="text-black no-underline hover:text-[var(--primary-lighter)]"
            >
              Services
            </Link>
            <Link
              href="/#contact"
              className="text-black no-underline hover:text-[var(--primary-lighter)]"
            >
              Contact
            </Link>

            <a
              className="mt-2 text-lg text-black no-underline lg:mt-0 lg:ml-6"
              href="tel:07974243764"
            >
              <InlineIcon icon={PhoneIcon} className="mr-2" /> 07974 243764
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
