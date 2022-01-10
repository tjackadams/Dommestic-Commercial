import type { NextPage } from "next";
import Image from "next/image";

import drainBannerImage from "../public/drain-banner.jpg";
import blockedDrainImage from "../public/blocked-drains.jpg";
import commercialDrainImage from "../public/commercial-drains.jpg";
import drainJettingImage from "../public/drain-jetting.jpg";

const Home: NextPage = () => {
  return (
    <>
      <div
        className="position-relative overflow-hidden p-3 mb-4 text-center text-white"
        style={{
          backgroundImage: `url(${drainBannerImage.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="col-md-8 p-lg-5 mx-auto">
          <h1 className="display-4">
            Providing Domestic & Commercial Drain Services
          </h1>
          <p className="lead">Across Dudley & the West Midlands</p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column w-75 p-4 justify-content-center bg-white border">
          <h2 className="display-5 text-center" id="#services">
            <strong>Our Services</strong>
          </h2>
          <p className="text-center mb-4">
            We offer a fast & efficient drainage service across the West
            Midlands to help you when you need it most. Whether it be for
            Domestic or Commercial drains, our aim is to identify and resolve
            the issue on the very same day. Contact us today to book our
            specialist drainage services.
          </p>
          <div className="card mb-4">
            <div className="row g-0">
              <div className="col-md-4">
                <Image
                  src={blockedDrainImage}
                  alt="Blocked Drains"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Blocked Drains</h5>
                  <p className="card-text">
                    Domestic & Commercial Drain Services provide a bespoke
                    service for clearing and unblocking all types of blocked
                    drains. This includes, but is not limited to Blocked Drains,
                    Blocked Sewers, Blocked Toilets, Blocked Sinks, Blocked
                    Basins and Blocked Baths.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-4">
            <div className="row g-0">
              <div className="col-md-4">
                <Image
                  src={commercialDrainImage}
                  alt="Blocked Commercial Drains"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Drainage</h5>
                  <p className="card-text">
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
          <div className="card mb-4">
            <div className="row g-0">
              <div className="col-md-4">
                <Image
                  src={drainJettingImage}
                  alt="Jetting Blocked Drains"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Drain Cleaning</h5>
                  <p className="card-text">
                    Most drainage problems can be solved without pulling out the
                    "big guns", but sometimes there are blockages that are so
                    stubborn, they require something special. Let us help with
                    our high pressure jetting service!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="display-5 text-center">
            <strong>Why do our customers recommend us?</strong>
          </h2>
          <ul className="list-unstyled text-center fs-4 lh-lg mb-4">
            <li>Excellent reputation for quality & honesty.</li>
            <li>Fast & reliable service.</li>
            <li>No VAT charges.</li>
            <li>Fully insured, up to £2 million.</li>
            <li>We do the dirty work, so you don't have to.</li>
          </ul>
          <div className="d-flex flex-wrap justify-content-around align-items-start">
            <div className="w-50">
              <h2 className="display-5 ">
                <strong>Areas we Service</strong>
              </h2>
              <ul className="list-unstyled fs-4 lh-lg mb-4">
                <li>Dudley</li>
                <li>Wolverhampton</li>
                <li>Cradley Heath</li>
                <li>Halesowen</li>
                <li>Netherton</li>
                <li>Stourbridge</li>
                <li>Tipton</li>
              </ul>
              <p className="lead">
                Can't see your area listed above? <br />
                We may still be able to help. Please do not hesitate to contact
                us with your enquiry.
              </p>
            </div>
            <div className="w-50">
              <h2 className="display-5 ">
                <strong>Contact us</strong>
              </h2>
              <form></form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
