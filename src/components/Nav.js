"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setPagesOpen(false);
  };

  const togglePages = (event) => {
    event.preventDefault();
    setPagesOpen((prev) => !prev);
  };

  return (
    <>
      {/* Topbar Start */}
      <div
        className="container-fluid bg-dark p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-3">
              <a className="text-body px-2" href="tel:+918073123896">
                <i className="fa fa-phone-alt text-primary me-2"></i>+91
                8073123896
              </a>
              <a className="text-body px-2" href="mailto:ekistiquedesignfora@gmail.com">
                <i className="fa fa-envelope-open text-primary me-2"></i>
                ekistiquedesignfora@gmail.com
              </a>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-2">
              <Link className="text-body px-2" href="#">
                Terms
              </Link>
              <Link className="text-body px-2" href="#">
                Privacy
              </Link>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              
              <a className="btn btn-sm-square btn-outline-body me-0" href="https://www.instagram.com/ekistiquedesignfora_?igsh=YnExOGNyenZucHUx">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <nav
        className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <Link href="/" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="text-primary m-0">
            <img
              className="me-3 w-18 "
              src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1776430340/ekistique_design_fora_fdesc1.jpg"
              alt="Icon"
            />
          </h1>
        </Link>

        <button
          type="button"
          className="mobile-nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="hamburger-icon"></span>
        </button>

        <div
          className={
            menuOpen
              ? "mobile-nav-menu mobile-nav-menu--open"
              : "mobile-nav-menu"
          }
        >
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link
              href="/"
              className="nav-item nav-link active"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="nav-item nav-link"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/service"
              className="nav-item nav-link"
              onClick={closeMenu}
            >
              Services
            </Link>

            {/* <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                onClick={togglePages}
              >
                Pages
              </a>
              <div
                className={
                  pagesOpen
                    ? "dropdown-menu border-0 m-0 show"
                    : "dropdown-menu border-0 m-0"
                }
              >
                <Link
                  href="/feature"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Our Features
                </Link>
                <Link
                  href="/project"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Our Projects
                </Link>
                <Link
                  href="/team"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Team Members
                </Link>
                <Link
                  href="/appointment"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Appointment
                </Link>
                <Link
                  href="/testimonial"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Testimonial
                </Link>
                <Link href="/404" className="dropdown-item" onClick={closeMenu}>
                  404 Page
                </Link>
              </div>
            </div> */}

            <Link
              href="/contact"
              className="nav-item nav-link"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>

          {/* Desktop button */}
          <Link style={{height:"50px"}}
            href="tel:+918073123896"
            className="btn btn-primary py-2 px-4 d-none d-lg-block"
            onClick={closeMenu}
          >
            Call Now
          </Link>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
}
