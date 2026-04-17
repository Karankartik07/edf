import React from "react";
import Link from "next/link";

export default function Nav() {
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
              <a className="text-body px-2" href="tel:+0123456789">
                <i className="fa fa-phone-alt text-primary me-2"></i>+91
                9810166061
              </a>
              <a className="text-body px-2" href="mailto:info@example.com">
                <i className="fa fa-envelope-open text-primary me-2"></i>
                info@example.com
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
              <a className="btn btn-sm-square btn-outline-body me-1" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-sm-square btn-outline-body me-1" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-sm-square btn-outline-body me-1" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-sm-square btn-outline-body me-0" href="#">
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
            <img className="me-3 w-18 " src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1776430340/ekistique_design_fora_fdesc1.jpg"  alt="Icon" />
        
          </h1>
        </Link>

        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* FIX: collapse class add ki */}
        <div className=" navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link href="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link href="/about" className="nav-item nav-link">
              About
            </Link>
            <Link href="/service" className="nav-item nav-link">
              Services
            </Link>

            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu border-0 m-0">
                <Link href="/feature" className="dropdown-item">
                  Our Features
                </Link>
                <Link href="/project" className="dropdown-item">
                  Our Projects
                </Link>
                <Link href="/team" className="dropdown-item">
                  Team Members
                </Link>
                <Link href="/appointment" className="dropdown-item">
                  Appointment
                </Link>
                <Link href="/testimonial" className="dropdown-item">
                  Testimonial
                </Link>
                <Link href="/404" className="dropdown-item">
                  404 Page
                </Link>
              </div>
            </div>

            <Link href="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>

          {/* Desktop button */}
          <Link
            href="/appointment"
            className="btn btn-primary py-2 px-4 d-none d-lg-block"
          >
            Appointment
          </Link>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
}
