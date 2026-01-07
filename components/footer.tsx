import { useContext } from "react";
import AppContext from "../appContext";
import Map from "./map";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const state = useContext(AppContext);

  return (
    <footer>
      <div className="w-full" style={{ height: 600 }}>
        <Map openingTimes={state?.openingTimes ?? []} />
      </div>
      <div className="flex flex-wrap items-start justify-evenly bg-neutral-900 p-4 text-center text-white md:text-left">
        <div className="shrink">
          <p className="font-bold">Domestic & Commercial Drain Services</p>
          <ul className="list-none p-0">
            <li>67 Merryfield Road</li>
            <li>Dudley</li>
            <li>West Midlands</li>
            <li>DY1 2ND</li>
          </ul>
          <ul className="mt-4 list-none p-0 leading-7">
            <li>
              <a
                className="inline-flex items-center gap-2 text-[color:var(--primary)] no-underline"
                href="tel:01384357446"
              >
                <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                <span>01384 357446</span>
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 text-[color:var(--primary)] no-underline"
                href="tel:07974243764"
              >
                <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                <span>07974 243764</span>
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 text-[color:var(--primary)] no-underline"
                href="mailto:stevetomkins53@gmail.com"
              >
                <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
                <span>stevetomkins53@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mx-6 hidden h-auto w-px bg-neutral-700 md:block" />
        <div className="shrink">
          <p className="font-bold">Opening Times</p>
          <ul className="list-none p-0 leading-7">
            {state?.openingTimes &&
              state.openingTimes.map((openingTime) => {
                return (
                  <li key={openingTime.day}>
                    {openingTime.day} {openingTime.opens}
                    {openingTime.opens !== "Closed"
                      ? " - " + openingTime.closes
                      : ""}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col flex-nowrap items-center justify-evenly bg-neutral-900 p-2 text-white md:flex-row">
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
