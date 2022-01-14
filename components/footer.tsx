import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppContext from "../appContext";
import Map from "./map";

export default function Footer() {
  const { openingTimes } = useContext(AppContext);

  return (
    <footer>
      <div className="w-100" style={{ height: 600 }}>
        <Map openingTimes={openingTimes} />
      </div>
      <Container
        fluid
        className="text-white p-4"
        style={{ backgroundColor: "#323130" }}
      >
        <Row md={2}>
          <Col>
            <p className="fw-bold">Domestic & Commercial Drain Services</p>
            <ul className="list-unstyled">
              <li>67 Merryfield Road</li>
              <li>Dudley</li>
              <li>West Midlands</li>
              <li>DY1 2ND</li>
            </ul>
            <ul className="list-unstyled text-primary lh-lg">
              <li>
                <a className="text-decoration-none" href="tel:01384357446">
                  <i className="bi bi-telephone"></i> 01384 357446
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="tel:07974243764">
                  <i className="bi bi-telephone"></i> 07974 243764
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none"
                  href="mailto:stevetomkins53@gmail.com"
                >
                  <i className="bi bi-envelope"></i> stevetomkins53@gmail.com
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <p>Opening Times</p>
            <ul className="list-unstyled lh-base">
              {openingTimes &&
                openingTimes.map((openingTime) => {
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
          </Col>
        </Row>
        <Row md={2}>
          <Col>
            <p>© 2022 - Domestic & Commercial Drain Services</p>
          </Col>
          <Col>
            <p>Website design by ITadams</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
