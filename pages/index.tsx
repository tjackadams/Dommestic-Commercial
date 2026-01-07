import React, { useContext, useEffect } from "react";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import ContactForm from "../components/contactForm";
import Spacer from "../components/spacer";
import Map from "../components/map";
import AppContext from "../appContext";
import { OpeningTime, openingTimes } from "../configuration/opening-times";
import { siteConfig } from "../configuration/site-config";

import drainBannerImage from "../public/drain-banner-dark.jpg";
import blockedDrainImage from "../public/blocked-drains.jpg";
import commercialDrainImage from "../public/commercial-drains.jpg";
import drainJettingImage from "../public/drain-jetting.jpg";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

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
        className="relative overflow-hidden p-4 text-center text-white md:mb-4 min-h-100 flex items-center"
        style={{
          backgroundImage: `url(${drainBannerImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        <div className="mx-auto max-w-4xl px-4 py-12 md:px-0">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight drop-shadow-md">
            Providing Domestic & Commercial <br className="hidden md:block" />{" "}
            Drain Services
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-normal drop-shadow-md">
            Professional solutions across Dudley & the West Midlands
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-sm bg-(--primary) px-8 py-3.5 text-lg font-bold text-white no-underline shadow-lg hover:bg-(--primary-lighter) transition-all hover:scale-105"
            >
              Book a Visit
            </Link>
            <a
              href={siteConfig.contact.telLinkMobile}
              className="rounded-sm bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 text-lg font-bold text-white no-underline shadow-lg hover:bg-white/20 transition-all"
            >
              Call {siteConfig.contact.mobile}
            </a>
          </div>
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
          <p className="mt-6 mb-12 text-center text-lg md:text-xl font-light text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            We offer a fast & efficient drainage service across the{" "}
            <strong className="font-semibold text-neutral-800">
              West Midlands
            </strong>{" "}
            to help you when you need it most. Whether it be for Domestic or
            Commercial drains, our aim is to identify and resolve the issue on
            the very same day.
          </p>

          <div className="mb-12 flex flex-col gap-12">
            <div className="overflow-hidden rounded-lg border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 min-h-62.5 relative">
                  <Image
                    src={blockedDrainImage}
                    alt="Blocked Drains"
                    fill
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
                <div className="md:w-2/3 flex items-center bg-neutral-50/50">
                  <div className="p-8 text-center md:text-left w-full">
                    <h3 className="text-2xl font-semibold mb-3">
                      Blocked Drains
                    </h3>
                    <p className="text-lg font-light text-neutral-600 leading-relaxed">
                      Domestic & Commercial Drain Services provide a bespoke
                      service for clearing and unblocking all types of blocked
                      drains. This includes Blocked Sewers, Toilets, Sinks,
                      Basins and Baths.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 min-h-62.5 relative">
                  <Image
                    src={commercialDrainImage}
                    alt="Blocked Commercial Drains"
                    fill
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
                <div className="md:w-2/3 flex items-center bg-neutral-50/50">
                  <div className="p-8 text-center md:text-left w-full">
                    <h3 className="text-2xl font-semibold mb-3">Drainage</h3>
                    <p className="text-lg font-light text-neutral-600 leading-relaxed">
                      Our drainage service covers both Commercial and Domestic
                      Drains. We manage projects effectively to ensure quick
                      completion with minimal disturbances for your property.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 min-h-62.5 relative">
                  <Image
                    src={drainJettingImage}
                    alt="Jetting Blocked Drains"
                    fill
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
                <div className="md:w-2/3 flex items-center bg-neutral-50/50">
                  <div className="p-8 text-center md:text-left w-full">
                    <h3 className="text-2xl font-semibold mb-3">
                      Drain Cleaning
                    </h3>
                    <p className="text-lg font-light text-neutral-600 leading-relaxed">
                      For stubborn blockages, our high pressure jetting service
                      identifies and resolves the issue quickly, restoring your
                      drains to full capacity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-16 bg-neutral-50 rounded-xl px-12">
            <h2 className="text-center text-3xl font-semibold md:text-5xl mb-12">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Quality & Honesty Guaranteed",
                "Fast & Reliable Service",
                "Competitive Pricing (No VAT)",
                "Fully Insured (£2m)",
                "Same Day Response",
                "Local Independent Experts",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-(--primary) flex items-center justify-center text-white shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Spacer />

          <div className="py-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-(--primary) font-bold tracking-wider uppercase text-sm mb-2 block">
                Local Coverage
              </span>
              <h2 className="text-3xl font-semibold md:text-5xl mb-6">
                Areas we Service
              </h2>
              <p className="text-lg text-neutral-600 font-light">
                Operating from our base in <span className="font-semibold text-neutral-800">Dudley</span>, we provide rapid response services to the following areas and beyond.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-2 md:px-4 mb-12">
              {siteConfig.serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-3 p-3 bg-white border border-neutral-100 shadow-sm rounded-lg hover:border-(--primary) transition-colors group">
                  <MapPinIcon className="h-5 w-5 shrink-0 text-neutral-400 group-hover:text-(--primary) transition-colors" />
                  <span className="text-base font-medium text-neutral-700 leading-tight">{area}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center p-8 border border-dashed border-neutral-200 rounded-xl bg-neutral-50/50">
              <p className="text-lg md:text-xl font-light text-neutral-600 mb-6">
                Can&#39;t see your area listed? We may still be able to help.
              </p>
              <Link
                href="/#contact"
                className="text-(--primary) font-bold text-lg hover:underline underline-offset-4"
              >
                Inquire about your location &rarr;
              </Link>
            </div>
          </div>

          <Spacer />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-4 md:px-12 items-start">
            <div className="bg-neutral-50 p-8 md:p-12 rounded-2xl shadow-inner border border-neutral-100">
              <h2 className="text-3xl font-semibold md:text-4xl mb-2 text-center lg:text-left">Book a Callout</h2>
              <p className="text-neutral-500 mb-8 text-center lg:text-left">Fill out the form below and we&#39;ll get back to you shortly.</p>
              <ContactForm />
            </div>
            
            <div className="flex flex-col gap-12" id="contact" style={{ scrollMarginTop: 100 }}>
              <div>
                <h2 className="text-3xl font-semibold md:text-4xl mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg text-neutral-800 mb-1">{siteConfig.businessName}</h3>
                    <p className="text-neutral-600 text-lg">
                      {siteConfig.address.line1}<br />
                      {siteConfig.address.town}<br />
                      {siteConfig.address.county}<br />
                      {siteConfig.address.postcode}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <a
                      className="inline-flex items-center gap-3 text-lg font-medium text-(--primary) no-underline hover:text-(--primary-lighter) transition-colors"
                      href={siteConfig.contact.telLinkLandline}
                    >
                      <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                        <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span>{siteConfig.contact.landline} (Landline)</span>
                    </a>
                    <a
                      className="inline-flex items-center gap-3 text-lg font-medium text-(--primary) no-underline hover:text-(--primary-lighter) transition-colors"
                      href={siteConfig.contact.telLinkMobile}
                    >
                      <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                        <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span>{siteConfig.contact.mobile} (Mobile)</span>
                    </a>
                    <a
                      className="inline-flex items-center gap-3 text-lg font-medium text-(--primary) no-underline hover:text-(--primary-lighter) transition-colors"
                      href={siteConfig.contact.mailtoLink}
                    >
                      <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                        <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span>{siteConfig.contact.email}</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="h-100 w-full rounded-2xl overflow-hidden shadow-md border border-neutral-100">
                <Map openingTimes={openingTimes} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
