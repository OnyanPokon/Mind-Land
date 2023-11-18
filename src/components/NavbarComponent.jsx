import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { navLinks } from "../data";
import '../style/component-style/navbar.css'

// eslint-disable-next-line react-refresh/only-export-components

const NavbarComponent = () => {
  let naviget = useNavigate();

  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div>
      <Navbar
        expand="lg"
        className={changeColor ? "color-active" : ""}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/" className="fs-3 fw-bold text-primary">
            <img
              src={logo}
              alt="Mind Land Logo"
              width="33"
              height="40"
              className="NavLogo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>

            <div className="text-center">
              <Button
                variant="info"
                size="md"
                onClick={() => naviget("/login")}
                className="text-light"
              >
                Masuk <BsArrowRight />
              </Button>{" "}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
