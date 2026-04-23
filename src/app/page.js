"use client";

import CompanyInfo from "../components/CompanyInfo";
import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ContactForm from "@/components/ContactForm";
// import ContactForm from "@/components/contactForm";

export default function Home() {
  return (
    <>
      {/* Carousel Start */}
      <div className="container-fluid p-0  wow fadeIn" data-wow-delay="0.1s">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="swiper-carousel position-relative"
        >
          <SwiperSlide>
            <div className="owl-carousel-item position-relative">
              <img
                style={{ minHeight: "400px" }}
                className="img-fluid"
                src="img/carousel-1.jpg"
                alt=""
              />
              <div className="owl-carousel-inner">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h1 className="display-1 text-white animated slideInDown">
                        Ekistique Design Fora
                      </h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-3">
                        Luxury Architecture | Healthcare & Hospitality
                        Specialists
                      </p>
                      <a
                        href="tel:+918073123896"
                        className="btn btn-primary py-3 px-5 animated slideInLeft"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="owl-carousel-item position-relative">
              <img
                style={{ minHeight: "400px" }}
                className="img-fluid"
                src="img/carousel-2.jpg"
                alt=""
              />
              <div className="owl-carousel-inner">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h1 className="display-1 text-white animated slideInDown">
                        Designing Landmark Spaces Across India
                      </h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-3">
                        Premium architectural solutions for healthcare and
                        hospitality
                      </p>
                      <a
                        href="tel:+918073123896"
                        className="btn btn-primary py-3 px-5 animated slideInLeft"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="owl-carousel-item position-relative">
              <img
                style={{ minHeight: "400px" }}
                className="img-fluid"
                src="img/carousel-3.jpg"
                alt=""
              />
              <div className="owl-carousel-inner">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h1 className="display-1 text-white animated slideInDown">
                        Innovation, Precision, Excellence
                      </h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-3">
                        Leading luxury architectural firm in India
                      </p>
                      <a
                        href="tel:+918073123896"
                        className="btn btn-primary py-3 px-5 animated slideInLeft"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Carousel End */}

      {/* Company Info Start */}
      <CompanyInfo />
      {/* Company Info End */}

      {/* Facts Start */}
      <div className="container-xxl py-5">
        <div className="container pt-5">
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                <div className="fact-icon">
                  <img src="img/icons/icon-2.png" alt="Icon" />
                </div>
                <h3 className="mb-3">Design Approach</h3>
                <p className="mb-0">
                  We follow a thoughtful and client-focused design approach,
                  blending creativity, functionality, and attention to detail to
                  create spaces that truly inspire.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                <div className="fact-icon">
                  <img src="img/icons/icon-3.png" alt="Icon" />
                </div>
                <h3 className="mb-3">Innovative Solutions</h3>
                <p className="mb-0">
                  We deliver smart and innovative solutions that combine modern
                  trends, practical planning, and unique ideas to meet every
                  project requirement.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                <div className="fact-icon">
                  <img src="img/icons/icon-4.png" alt="Icon" />
                </div>
                <h3 className="mb-3">Project Management</h3>
                <p className="mb-0">
                  Our professional project management ensures smooth execution,
                  timely delivery, quality control, and complete transparency
                  from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img">
                <img className="img-fluid" src="img/about-1.jpg" alt="" />
                <img className="img-fluid" src="img/about-2.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="section-title">About Us</h4>
              <h1 className="display-5 mb-4">
                A Creative Architecture Agency For Your Dream Home
              </h1>
              <p>
                At our creative architecture agency, we believe every dream home
                begins with a unique vision. We specialize in designing elegant,
                functional, and inspiring spaces that reflect your lifestyle and
                personality.
              </p>
              <p className="mb-4">
                From innovative architectural planning to stunning interiors and
                seamless execution, our team is dedicated to turning ideas into
                reality. With a perfect blend of creativity, quality, and
                attention to detail, we create homes that are not only beautiful
                but also built for comfort and lasting value.
              </p>
              <div className="d-flex align-items-center mb-5">
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary counter-container">
                  <h1 className="display-1 mb-n2" data-toggle="counter-up">
                    25
                  </h1>
                </div>
                <div className="ps-4">
                  <h3>Years</h3>
                  <h3>Working</h3>
                  <h3 className="mb-0">Experience</h3>
                </div>
              </div>
              <a className="btn btn-primary py-3 px-5" href="">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp section-max-width"
            data-wow-delay="0.1s"
          >
            <h4 className="section-title">Our Services</h4>
            <h1 className="display-5 mb-4">
              We Focused On Modern Architecture And Interior Design
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="img/service-1.jpg" alt="" />
                <div className="service-text p-5">
                  <img className="mb-4" src="img/icons/icon-5.png" alt="Icon" />
                  <h3 className="mb-3">Architecture</h3>
                  <p className="mb-4">
                    Innovative and functional architectural designs crafted to
                    bring your vision to life.
                  </p>
                  <a className="btn" href="/contact-us">
                    <i className="fa fa-plus text-primary me-3"></i>Contact us
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="img/service-2.jpg" alt="" />
                <div className="service-text p-5">
                  <img className="mb-4" src="img/icons/icon-6.png" alt="Icon" />
                  <h3 className="mb-3">3D Animation</h3>
                  <p className="mb-4">
                    Realistic 3D visualizations that help you experience your
                    project before execution.
                  </p>
                  <a className="btn" href="/contact-us">
                    <i className="fa fa-plus text-primary me-3"></i>Contact us
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="img/service-3.jpg" alt="" />
                <div className="service-text p-5">
                  <img className="mb-4" src="img/icons/icon-7.png" alt="Icon" />
                  <h3 className="mb-3">House Planning</h3>
                  <p className="mb-4">
                    Smart and efficient house layouts designed for comfort,
                    style, and practicality.
                  </p>
                  <a className="btn" href="/contact-us">
                    <i className="fa fa-plus text-primary me-3"></i>Contact us
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="img/service-4.jpg" alt="" />
                <div className="service-text p-5">
                  <img className="mb-4" src="img/icons/icon-8.png" alt="Icon" />
                  <h3 className="mb-3">Interior Design</h3>
                  <p className="mb-4">
                    Elegant interior solutions that combine beauty,
                    functionality, and modern living.
                  </p>
                  <a className="btn" href="/contact-us">
                    <i className="fa fa-plus text-primary me-3"></i>Contact us
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="img/service-5.jpg" alt="" />
                <div className="service-text p-5">
                  <img className="mb-4" src="img/icons/icon-9.png" alt="Icon" />
                  <h3 className="mb-3">Renovation</h3>
                  <p className="mb-4">
                    Transforming existing spaces into refreshed, stylish, and
                    highly functional environments.
                  </p>
                  <a className="btn" href="/contact-us">
                    <i className="fa fa-plus text-primary me-3"></i>Contact us
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="img/service-6.jpg" alt="" />
                <div className="service-text p-5">
                  <img
                    className="mb-4"
                    src="img/icons/icon-10.png"
                    alt="Icon"
                  />
                  <h3 className="mb-3">Construction</h3>
                  <p className="mb-4">
                    Reliable end-to-end construction services ensuring quality,
                    precision, and timely delivery.
                  </p>
                  <a className="btn" href="/contact-us">
                    <i className="fa fa-plus text-primary me-3"></i>Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Feature Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h4 className="section-title">Why Choose Us!</h4>
              <h1 className="display-5 mb-4">
                Why You Should Trust Us? Learn More About Us!
              </h1>
              <p className="mb-4">
                We are committed to delivering exceptional architecture,
                interior design, and construction services with creativity,
                quality, and professionalism. Our experienced team focuses on
                understanding your vision and transforming it into elegant,
                functional, and lasting spaces. With transparent communication,
                timely delivery, and attention to every detail, we ensure a
                smooth and stress-free experience from concept to completion.
              </p>
              <div className="row g-4">
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img
                      className="flex-shrink-0"
                      src="img/icons/icon-2.png"
                      alt="Icon"
                    />
                    <div className="ms-4">
                      <h3>Design Approach</h3>
                      <p className="mb-0">
                        Our design approach is centered around creativity,
                        functionality, and personalization, ensuring every
                        project reflects your lifestyle and aspirations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img
                      className="flex-shrink-0"
                      src="img/icons/icon-3.png"
                      alt="Icon"
                    />
                    <div className="ms-4">
                      <h3>Innovative Solutions</h3>
                      <p className="mb-0">
                        We provide modern and innovative solutions that combine
                        smart planning, latest trends, and practical execution
                        for outstanding results.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img
                      className="flex-shrink-0"
                      src="img/icons/icon-4.png"
                      alt="Icon"
                    />
                    <div className="ms-4">
                      <h3>Project Management</h3>
                      <p className="mb-0">
                        Our expert project management guarantees seamless
                        coordination, quality workmanship, on-time delivery, and
                        complete client satisfaction throughout the project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="feature-img">
                <img className="img-fluid" src="img/about-2.jpg" alt="" />
                <img className="img-fluid" src="img/about-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}

      {/* Project Start */}
      <div className="container-xxl project py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp section-max-width"
            data-wow-delay="0.1s"
          >
            <h4 className="section-title">Our Projects</h4>
            <h1 className="display-5 mb-4">
              Visit Our Latest Projects And Our Innovative Works
            </h1>
            <p className="mb-0">
              Explore our portfolio of thoughtfully designed projects that
              showcase creativity, quality, and modern architecture. From
              residential spaces to commercial landmarks, each project reflects
              our commitment to excellence, innovation, and client satisfaction.
            </p>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4">
              <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-1"
                  type="button"
                >
                  <h3 className="m-0">01. Modern Complex</h3>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-2"
                  type="button"
                >
                  <h3 className="m-0">02. Royal Hotel</h3>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-3"
                  type="button"
                >
                  <h3 className="m-0">03. Mexwel Building</h3>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-4"
                  type="button"
                >
                  <h3 className="m-0">04. Shopping Complex</h3>
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <div className="row g-4">
                    <div className="col-md-6 tab-image-container">
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100 object-cover"
                          src="img/project-1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">
                        25 Years Of Experience In Architecture Industry
                      </h1>
                      <p className="mb-4">
                        With over 25 years of industry experience, we have
                        successfully delivered innovative architectural,
                        interior, and construction projects with trust, quality,
                        and precision. Our expertise allows us to create spaces
                        that are functional, stylish, and built to last.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Design
                        Approach – Personalized designs tailored to your needs
                        and lifestyle.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        Innovative Solutions – Smart ideas combined with modern
                        technology and trends.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Project
                        Management – Smooth execution with timely delivery and
                        complete transparency.
                      </p>
                      <a
                        href="tel:+918073123896"
                        className="btn btn-primary py-3 px-5 mt-3"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <div className="row g-4">
                    <div className="col-md-6 tab-image-container">
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100 object-cover"
                          src="img/project-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">
                        25 Years Of Experience In Architecture Industry
                      </h1>
                      <p className="mb-4">
                        With over 25 years of industry experience, we have
                        successfully delivered innovative architectural,
                        interior, and construction projects with trust, quality,
                        and precision. Our expertise allows us to create spaces
                        that are functional, stylish, and built to last.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Design
                        Approach – Personalized designs tailored to your needs
                        and lifestyle.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        Innovative Solutions – Smart ideas combined with modern
                        technology and trends.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Project
                        Management – Smooth execution with timely delivery and
                        complete transparency.
                      </p>
                      <a
                        href="tel:+918073123896"
                        className="btn btn-primary py-3 px-5 mt-3"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row g-4">
                    <div className="col-md-6 tab-image-container">
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100 object-cover"
                          src="img/project-3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">
                        25 Years Of Experience In Architecture Industry
                      </h1>
                      <p className="mb-4">
                        With over 25 years of industry experience, we have
                        successfully delivered innovative architectural,
                        interior, and construction projects with trust, quality,
                        and precision. Our expertise allows us to create spaces
                        that are functional, stylish, and built to last.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Design
                        Approach – Personalized designs tailored to your needs
                        and lifestyle.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        Innovative Solutions – Smart ideas combined with modern
                        technology and trends.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Project
                        Management – Smooth execution with timely delivery and
                        complete transparency.
                      </p>
                      <a
                        href="tel:+918073123896"
                        className="btn btn-primary py-3 px-5 mt-3"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-4">
                  <div className="row g-4">
                    <div className="col-md-6 tab-image-container">
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100 object-cover"
                          src="img/project-4.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">
                        25 Years Of Experience In Architecture Industry
                      </h1>
                      <p className="mb-4">
                        With over 25 years of industry experience, we have
                        successfully delivered innovative architectural,
                        interior, and construction projects with trust, quality,
                        and precision. Our expertise allows us to create spaces
                        that are functional, stylish, and built to last.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Design
                        Approach – Personalized designs tailored to your needs
                        and lifestyle.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        Innovative Solutions – Smart ideas combined with modern
                        technology and trends.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Project
                        Management – Smooth execution with timely delivery and
                        complete transparency.
                      </p>
                      <a
                        href="tel:+918073123896"
                        className="btn btn-primary py-3 px-5 mt-3"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project End */}

      {/* Team Start */}
      {/* <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp section-max-width"
            data-wow-delay="0.1s"
          >
            <h4 className="section-title">Team Members</h4>
            <h1 className="display-5 mb-4">
              We Are Creative Architecture Team For Your Dream Home
            </h1>
          </div>
          <div className="row g-0 team-items">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item position-relative">
                <div className="position-relative">
                  <img className="img-fluid" src="img/team-1.jpg" alt="" />
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h3 className="mt-2">Architect Name</h3>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item position-relative">
                <div className="position-relative">
                  <img className="img-fluid" src="img/team-2.jpg" alt="" />
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h3 className="mt-2">Architect Name</h3>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item position-relative">
                <div className="position-relative">
                  <img className="img-fluid" src="img/team-3.jpg" alt="" />
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h3 className="mt-2">Architect Name</h3>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative">
                <div className="position-relative">
                  <img className="img-fluid" src="img/team-4.jpg" alt="" />
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h3 className="mt-2">Architect Name</h3>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Team End */}

      {/* Appointment Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <ContactForm />
          </div>
        </div>
      </div>
      {/* Appointment End */}

      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp section-max-width"
            data-wow-delay="0.1s"
          >
            <h4 className="section-title">Testimonial</h4>
            <h1 className="display-5 mb-4">
              Premium Indian Client Testimonials
            </h1>
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            // pagination={{ clickable: true }}
            className="testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            {[
              {
                quote:
                  "Working with Ekistique Design Fora was the best decision for our home interiors. Their team understood our lifestyle perfectly and transformed our apartment into a modern, luxurious space. Every detail was thoughtfully designed.",
                name: "Rohan Mehta",
                location: "Gurgaon",
                project: "Residential Project – Delhi NCR",
              },
              {
                quote:
                  "From concept to execution, the entire process was seamless. The quality of materials, finishing, and professionalism exceeded our expectations. Highly recommended for premium home interiors.",
                name: "Priya Sharma",
                location: "Noida",
                project: "Villa Interior – Noida",
              },
              {
                quote:
                  "They redesigned our corporate office with elegance and functionality. Our employees love the new environment, and clients are always impressed when they visit.",
                name: "Ankit Verma",
                location: "Bangalore",
                project: "Office Space – Bangalore",
              },
              {
                quote:
                  "Their design sense is exceptional. They blended sophistication with comfort beautifully. We truly felt heard throughout the project.",
                name: "Sneha Kapoor",
                location: "Mumbai",
                project: "Luxury Apartment – Mumbai",
              },
              {
                quote:
                  "Ekistique Design Fora helped us create a premium retail experience for our customers. Footfall and engagement improved after the renovation.",
                name: "Manish Agarwal",
                location: "Jaipur",
                project: "Retail Store – Jaipur",
              },
              {
                quote:
                  "Their team delivered exactly what they promised — classy design, timely completion, and unmatched attention to detail.",
                name: "Neha Jain",
                location: "Pune",
                project: "Penthouse – Pune",
              },
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-item text-center">
                  <p className="fs-5">{testimonial.quote}</p>
                  <h3>{testimonial.name}</h3>
                  <span className="text-primary">{testimonial.location}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
}
