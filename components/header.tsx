import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-white">
      <Container>
        <Navbar.Brand href="/" className="fs-4 fw-bold">
          Domestic & Commercial Drain Services
        </Navbar.Brand>
        <Navbar.Brand className="ms-4 fs-5 fw-normal d-none d-lg-block">
          West Midlands
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="ms-4 me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Link href="/#services" passHref>
              <Nav.Link>Services</Nav.Link>
            </Link>
            <Link href="/#contact" passHref>
              <Nav.Link>Contact</Nav.Link>
            </Link>
          </Nav>
          <Nav>
            <Nav.Link className="fs-5 link-dark" href="tel:07974243764">
              <i className="bi bi-telephone"></i> 07974 243764
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
