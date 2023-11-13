import {Navbar, Container, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const navLinks = [
  {
    id: 1,
    path: "",
    text: "Home",
  },
  {
    id: 2,
    path: "Articles",
    text: "Articles",
  },
  {
    id: 3,
    path: "Doctor",
    text: "Doctor",
  },
  {
    id: 4,
    path: "About",
    text: "About",
  },
];

const NavbarComponent = () => {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((link) => {
              return ( <div key={link.id}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </div>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponent