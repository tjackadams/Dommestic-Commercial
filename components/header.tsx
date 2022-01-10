import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          Domestic & Commercial Drain Services
        </Navbar.Brand>
        <Navbar.Brand className="ms-auto">West Midlands</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="tel:07974243764">07974 243764</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
