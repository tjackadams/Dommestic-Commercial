import { siteConfig } from "../configuration/site-config";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <p className="text-xl font-bold mb-4">{siteConfig.businessName}</p>
            <address className="not-italic text-neutral-400 space-y-1">
              <p>{siteConfig.address.line1}</p>
              <p>{siteConfig.address.town}</p>
              <p>{siteConfig.address.county}</p>
              <p>{siteConfig.address.postcode}</p>
            </address>
          </div>

          <div>
            <p className="text-lg font-bold mb-4 text-white">Quick Contact</p>
            <ul className="space-y-4">
              <li>
                <a
                  className="inline-flex items-center gap-3 text-(--primary) no-underline hover:text-(--primary-lighter) transition-colors"
                  href={siteConfig.contact.telLinkLandline}
                >
                  <PhoneIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span className="text-lg">{siteConfig.contact.landline}</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-3 text-(--primary) no-underline hover:text-(--primary-lighter) transition-colors"
                  href={siteConfig.contact.telLinkMobile}
                >
                  <PhoneIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span className="text-lg">{siteConfig.contact.mobile}</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-3 text-neutral-400 no-underline hover:text-white transition-colors"
                  href={siteConfig.contact.mailtoLink}
                >
                  <EnvelopeIcon
                    className="h-5 w-5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-lg truncate">
                    {siteConfig.contact.email}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-bold mb-4 text-white">Opening Hours</p>
            <ul className="text-neutral-400 space-y-1">
              <li>Mon - Fri: 09:00 - 17:00</li>
              <li>Sat: 09:00 - 14:00</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.businessName}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
