import React, { useContext, useEffect } from "react";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import ContactForm from "../components/contactForm";
import Spacer from "../components/spacer";
import AppContext from "../appContext";
import { OpeningTime, openingTimes } from "../configuration/opening-times";

import drainBannerImage from "../public/drain-banner-dark.jpg";
import blockedDrainImage from "../public/blocked-drains.jpg";
import commercialDrainImage from "../public/commercial-drains.jpg";
import drainJettingImage from "../public/drain-jetting.jpg";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

import InlineIcon from "../components/InlineIcon";

export const getStaticProps: GetStaticProps<{
  openingTimes: OpeningTime[];
}> = async (context) => {
  return {
    props: {
      openingTimes,
    },
  };
};

const Home: NextPage<{ openingTimes: OpeningTime[] }> = ({ openingTimes }) => {
  const state = useContext(AppContext);

  useEffect(() => {
    state?.setOpeningTimes(openingTimes);
  }, [state, openingTimes]);

  return (
    <>
      <div
        className="relative overflow-hidden p-4 text-center text-white md:mb-4"
        style={{
          backgroundImage: `url(${drainBannerImage.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-3xl px-4 py-10 md:px-0">
          <h1 className="text-4xl md:text-5xl">
            Providing Domestic & Commercial Drain Services
          </h1>
          <p className="mt-2 text-xl">Across Dudley & the West Midlands</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-3/4 flex flex-col justify-center border border-neutral-200 bg-white p-4 md:p-10">
          <h2
            className="text-center text-3xl font-semibold md:text-4xl"
            id="services"
            style={{ scrollMarginTop: 100 }}
          >
            <strong>Our Services</strong>
          </h2>
          <p className="mb-5 text-center text-lg font-light">
            We offer a fast & efficient drainage service across the{" "}
            <strong>West Midlands</strong> to help you when you need it most.
            Whether it be for Domestic or Commercial drains, our aim is to
            identify and resolve the issue on the very same day.{" "}
            <Link
              href="/#contact"
              className="text-[color:var(--primary)] no-underline hover:text-[var(--primary-lighter)]"
            >
              Contact us
            </Link>{" "}
            today to book our specialist drainage services.
          </p>

          <div className="mb-3 flex flex-col gap-10">
            <div className="overflow-hidden rounded shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <Image
                    src={blockedDrainImage}
                    alt="Blocked Drains"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="p-4 text-center">
                    <p className="text-lg font-medium">Blocked Drains</p>
                    <p className="font-light">
                      Domestic & Commercial Drain Services provide a bespoke
                      service for clearing and unblocking all types of blocked
                      drains. This includes, but is not limited to Blocked
                      Drains, Blocked Sewers, Blocked Toilets, Blocked Sinks,
                      Blocked Basins and Blocked Baths.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <Image
                    src={commercialDrainImage}
                    alt="Blocked Commercial Drains"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="p-4 text-center">
                    <p className="text-lg font-medium">Drainage</p>
                    <p className="font-light">
                      Our drainage service covers both Commercial Drains and
                      Domestic Drains. We understand how important it is to our
                      customers that projects are managed effectively to ensure
                      quick and successful completion with minimal disturbances
                      for the business or residential property.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <Image
                    src={drainJettingImage}
                    alt="Jetting Blocked Drains"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="p-4 text-center">
                    <p className="text-lg font-medium">Drain Cleaning</p>
                    <p className="font-light">
                      Most drainage problems can be solved without pulling out
                      the &quot;big guns&quot;, but sometimes there are
                      blockages that are so stubborn, they require something
                      special. Let us help with our high pressure jetting
                      service!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Spacer />
          <h2 className="text-center text-3xl font-semibold md:text-4xl">
            <strong>Why do our customers recommend us?</strong>
          </h2>
          <ul className="list-none p-0 text-center text-2xl leading-relaxed">
            <li>Excellent reputation for quality & honesty.</li>
            <li>Fast & reliable service.</li>
            <li>No VAT charges.</li>
            <li>Fully insured, up to £2 million.</li>
            <li>We do the dirty work, so you don&#39;t have to.</li>
          </ul>

          <Spacer />

          <div className="flex flex-wrap items-start justify-evenly">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold md:text-4xl">
                <strong>Areas we Service</strong>
              </h2>
              <ul className="mb-4 list-none p-0 text-2xl leading-relaxed">
                <li>Dudley</li>
                <li>Wolverhampton</li>
                <li>Cradley Heath</li>
                <li>Halesowen</li>
                <li>Netherton</li>
                <li>Stourbridge</li>
                <li>Tipton</li>
              </ul>
              <p className="text-xl">
                Can&#39;t see your area listed above? <br />
                We may still be able to help. <br />
                Please do not hesitate to contact us with your enquiry.
              </p>
            </div>
            <div className="shrink-0">
              <h2 className="text-3xl font-semibold md:text-4xl">
                <strong>Contact us</strong>
              </h2>
              <ContactForm />
            </div>
          </div>

          <Spacer />

          <div className="flex items-start justify-evenly">
            <div className="text-center md:text-left">
              <h2
                className="text-3xl font-semibold md:text-4xl"
                id="contact"
                style={{ scrollMarginTop: 100 }}
              >
                <strong>Contact Information</strong>
              </h2>
              <p className="font-bold">Domestic & Commercial Drain Services</p>
              <ul className="list-none p-0">
                <li>67 Merryfield Road</li>
                <li>Dudley</li>
                <li>West Midlands</li>
                <li>DY1 2ND</li>
              </ul>
              <ul className="mt-4 list-none p-0 leading-7 text-[color:var(--primary)]">
                <li>
                  <a className="no-underline" href="tel:01384357446">
                    <InlineIcon icon={PhoneIcon} className="mr-2" /> 01384
                    357446
                  </a>
                </li>
                <li>
                  <a className="no-underline" href="tel:07974243764">
                    <InlineIcon icon={PhoneIcon} className="mr-2" /> 07974
                    243764
                  </a>
                </li>
                <li>
                  <a
                    className="no-underline"
                    href="mailto:stevetomkins53@gmail.com"
                  >
                    <InlineIcon icon={EnvelopeIcon} className="mr-2" />
                    stevetomkins53@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
