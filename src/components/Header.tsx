import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" collapseOnSelect className="navbar-glass">
      <Container>
        {/* Logo + nombre */}
        <Navbar.Brand href="#main" className="fw-bold">
          <img src="/logo.png" alt="Logo" className="brand-logo"/>
          Web Responsiva
        </Navbar.Brand>

        {/* Botón hamburguesa */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Menú colapsable */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#main" eventKey="1">Inicio</Nav.Link>
            <Nav.Link href="#section" eventKey="2">Contenido</Nav.Link>
            <Nav.Link href="#footer" eventKey="3">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
