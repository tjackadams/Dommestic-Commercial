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
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-4xl px-4 py-16 md:px-0 md:py-24">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Providing Domestic & Commercial <br className="hidden md:block" />{" "}
            Drain Services
          </h1>
          <p className="mt-4 text-xl md:text-2xl">
            Across Dudley & the West Midlands
          </p>
        </div>
      </div>
      <div className="flex justify-center -mt-8 md:-mt-12 relative z-10 px-4">
        <div className="w-full max-w-6xl flex flex-col justify-center bg-white p-6 shadow-xl md:p-16 rounded-sm">
          <h2
            className="text-center text-3xl font-normal md:text-5xl"
            id="services"
            style={{ scrollMarginTop: 100 }}
          >
            Our Services
          </h2>
          <p className="mt-6 mb-10 text-center text-lg md:text-xl font-light text-neutral-600 max-w-4xl mx-auto">
            We offer a fast & efficient drainage service across the{" "}
            <strong className="font-semibold text-neutral-800">
              West Midlands
            </strong>{" "}
            to help you when you need it most. Whether it be for Domestic or
            Commercial drains, our aim is to identify and resolve the issue on
            the very same day.{" "}
            <Link
              href="/#contact"
              className="text-[color:var(--primary)] no-underline hover:text-[var(--primary-lighter)] font-medium underline decoration-primary/30"
            >
              Contact us
            </Link>{" "}
            today to book our specialist drainage services.
          </p>

          <div className="mb-8 flex flex-col gap-12">
            <div className="overflow-hidden rounded-lg border border-neutral-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 min-h-[250px]">
                  <Image
                    src={blockedDrainImage}
                    alt="Blocked Drains"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 flex items-center">
                  <div className="p-8 text-center md:text-left w-full">
                    <p className="text-2xl font-semibold mb-3">
                      Blocked Drains
                    </p>
                    <p className="text-lg font-light text-neutral-600 leading-relaxed">
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
            <div className="overflow-hidden rounded-lg border border-neutral-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 min-h-[250px]">
                  <Image
                    src={commercialDrainImage}
                    alt="Blocked Commercial Drains"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 flex items-center">
                  <div className="p-8 text-center md:text-left w-full">
                    <p className="text-2xl font-semibold mb-3">Drainage</p>
                    <p className="text-lg font-light text-neutral-600 leading-relaxed">
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
            <div className="overflow-hidden rounded-lg border border-neutral-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 min-h-[250px]">
                  <Image
                    src={drainJettingImage}
                    alt="Jetting Blocked Drains"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 flex items-center">
                  <div className="p-8 text-center md:text-left w-full">
                    <p className="text-2xl font-semibold mb-3">
                      Drain Cleaning
                    </p>
                    <p className="text-lg font-light text-neutral-600 leading-relaxed">
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
          <div className="py-12">
            <h2 className="text-center text-3xl font-semibold md:text-5xl mb-8">
              Why do our customers recommend us?
            </h2>
            <ul className="list-none p-0 text-center text-xl md:text-2xl leading-[2.5rem] font-light text-neutral-700">
              <li>Excellent reputation for quality & honesty.</li>
              <li>Fast & reliable service.</li>
              <li>No VAT charges.</li>
              <li>Fully insured, up to £2 million.</li>
              <li>We do the dirty work, so you don&#39;t have to.</li>
            </ul>
          </div>

          <Spacer />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-normal md:text-4xl mb-4">
                Areas we Service
              </h2>
              <ul className="mb-6 list-none p-0 text-xl md:text-2xl leading-relaxed font-light text-neutral-700">
                <li>Dudley</li>
                <li>Wolverhampton</li>
                <li>Cradley Heath</li>
                <li>Halesowen</li>
                <li>Netherton</li>
                <li>Stourbridge</li>
                <li>Tipton</li>
              </ul>
              <p className="text-lg md:text-xl font-light text-neutral-600">
                Can&#39;t see your area listed above? <br />
                We may still be able to help. <br />
                Please do not hesitate to contact us with your enquiry.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-3xl font-normal md:text-4xl">Contact us</h2>
              <ContactForm />
            </div>
          </div>

          <Spacer />

          <div className="px-4 md:px-12">
            <div className="text-center md:text-left">
              <h2
                className="text-3xl font-normal md:text-4xl"
                id="contact"
                style={{ scrollMarginTop: 100 }}
              >
                Contact Information
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
                  <a
                    className="inline-flex items-center gap-2 no-underline"
                    href="tel:01384357446"
                  >
                    <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                    <span>01384 357446</span>
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-2 no-underline"
                    href="tel:07974243764"
                  >
                    <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                    <span>07974 243764</span>
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-2 no-underline"
                    href="mailto:stevetomkins53@gmail.com"
                  >
                    <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
                    <span>stevetomkins53@gmail.com</span>
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
