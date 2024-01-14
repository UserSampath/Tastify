import React, { useState } from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../../image/logo.png";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useNavigate } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
const NavBar = () => {
  const navigate = useNavigate();
  const [showLogOut, setShowLogOut] = useState(false);

  const clickedLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");

    navigate("/login");
  };

  return (
    <div>
      <Navbar expand="lg" className="nav" style={{ height: "50px" }}>
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center ms-auto">
          <img
            style={{ marginLeft: "30px" }}
            src={Logo}
            alt=" Employee Management System"
            height="32"
            className="d-inline-block align-top"
          />
          <span
            style={{ color: "#6b6b6b", fontWeight: "600" }}
            className="ms-4">
            Tastify
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <span style={{ color: "#6b6b6b", fontWeight: "600" }}>
            <div style={{ marginRight: "40px", fontWeight: "100" }}>
              <div className="d-flex align-items-center">
                <IoMdNotificationsOutline className="m-2" size={28} />
                <img
                  src="../../../image/Men.png"
                  alt=""
                  style={{ height: "42px" }}
                />
              </div>
            </div>
          </span>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
