import { useContext } from "react";
import AppContext from "../appContext";
import Map from "./map";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const state = useContext(AppContext);

  return (
    <footer>
      <div className="w-full" style={{ height: 450 }}>
        <Map openingTimes={state?.openingTimes ?? []} />
      </div>
      <div className="flex flex-wrap items-start justify-evenly bg-neutral-900 p-8 text-center text-white md:text-left">
        <div className="shrink">
          <p className="text-xl font-bold">
            Domestic & Commercial Drain Services
          </p>
          <ul className="mt-2 list-none p-0 text-neutral-300">
            <li>67 Merryfield Road</li>
            <li>Dudley</li>
            <li>West Midlands</li>
            <li>DY1 2ND</li>
          </ul>
          <ul className="mt-6 list-none p-0 leading-8">
            <li>
              <a
                className="inline-flex items-center gap-3 text-[color:var(--primary)] no-underline hover:text-[var(--primary-lighter)]"
                href="tel:01384357446"
              >
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                <span className="text-lg">01384 357446</span>
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-3 text-[color:var(--primary)] no-underline hover:text-[var(--primary-lighter)]"
                href="tel:07974243764"
              >
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                <span className="text-lg">07974 243764</span>
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-3 text-[color:var(--primary)] no-underline hover:text-[var(--primary-lighter)]"
                href="mailto:stevetomkins53@gmail.com"
              >
                <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                <span className="text-lg">stevetomkins53@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mx-6 hidden h-auto w-px bg-neutral-800 md:block" />
        <div className="shrink mt-10 md:mt-0">
          <p className="text-xl font-bold">Opening Times</p>
          <ul className="mt-2 list-none p-0 leading-8 text-neutral-300">
            {state?.openingTimes &&
              state.openingTimes.map((openingTime) => {
                return (
                  <li
                    key={openingTime.day}
                    className="flex justify-between gap-10"
                  >
                    <span className="font-medium">{openingTime.day}</span>
                    <span>
                      {openingTime.opens}
                      {openingTime.opens !== "Closed"
                        ? " - " + openingTime.closes
                        : ""}
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col flex-nowrap items-center justify-between border-t border-neutral-800 bg-neutral-900 px-10 py-4 text-sm text-neutral-400 md:flex-row">
        <div>
          <p>© 2022 - Domestic & Commercial Drain Services</p>
        </div>
        <div>
          <p>Website design by ITadams</p>
        </div>
      </div>
    </footer>
  );
}
