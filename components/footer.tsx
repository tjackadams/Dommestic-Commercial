import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppContext from "../appContext";
import Map from "./map";

export default function Footer() {
  const state = useContext(AppContext);

  return (
    <footer>
      <div className="w-100" style={{ height: 600 }}>
        <Map openingTimes={state?.openingTimes ?? []} />
      </div>
      <div className="d-flex flex-wrap justify-content-evenly align-items-start text-white p-4 bg-dark">
        <div className="flex-shrink-1">
          <p className="fw-bold">Domestic & Commercial Drain Services</p>
          <ul className="list-unstyled">
            <li>67 Merryfield Road</li>
            <li>Dudley</li>
            <li>West Midlands</li>
            <li>DY1 2ND</li>
          </ul>
          <ul className="list-unstyled lh-lg">
            <li>
              <a
                className="link-primary text-decoration-none"
                href="tel:01384357446"
              >
                <i className="bi bi-telephone"></i> 01384 357446
              </a>
            </li>
            <li>
              <a
                className="link-primary text-decoration-none"
                href="tel:07974243764"
              >
                <i className="bi bi-telephone"></i> 07974 243764
              </a>
            </li>
            <li>
              <a
                className="link-primary text-decoration-none"
                href="mailto:stevetomkins53@gmail.com"
              >
                <i className="bi bi-envelope"></i> stevetomkins53@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="vr d-none d-md-block"></div>
        <div className="flex-shrink-1">
          <p className="fw-bold">Opening Times</p>
          <ul className="list-unstyled lh-lg">
            {state?.openingTimes &&
              state.openingTimes.map((openingTime) => {
                return (
                  <li>
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
      <div className="d-flex flex-nowrap justify-content-evenly align-items-center text-white p-2 bg-dark">
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
