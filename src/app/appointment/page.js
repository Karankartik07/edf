import CompanyInfo from "../../components/CompanyInfo";

export default function Appointment() {
  return (
    <>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-1 text-white animated slideInDown">
            Appointment
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb text-uppercase mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Appointment
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Appointment Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h4 className="section-title">Appointment</h4>
              <h1 className="display-5 mb-4">
                Make An Appointment To Start Your Dream Project
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row g-4">
                <div className="col-12">
                  <div className="d-flex">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center bg-light"
                      style={{ width: "65px", height: "65px" }}
                    >
                      <i className="fa fa-2x fa-phone-alt text-primary"></i>
                    </div>
                    <div className="ms-4">
                      <p className="mb-2">Call Us Now</p>
                      <h3 className="mb-0">+91 9810166061 / +91 8073123896</h3>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center bg-light"
                      style={{ width: "65px", height: "65px" }}
                    >
                      <i className="fa fa-2x fa-envelope-open text-primary"></i>
                    </div>
                    <div className="ms-4">
                      <p className="mb-2">Mail Us Now</p>
                      <h3 className="mb-0">ekistiquedesignfora@gmail.com</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Mobile"
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <select
                    className="form-select"
                    style={{ height: "55px" }}
                    defaultValue="Choose Service"
                  >
                    <option value="Choose Service">Choose Service</option>
                    <option value="1">Service 1</option>
                    <option value="2">Service 2</option>
                    <option value="3">Service 3</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="date" id="date" data-target-input="nearest">
                    <input
                      type="text"
                      className="form-control datetimepicker-input"
                      placeholder="Choose Date"
                      data-target="#date"
                      data-toggle="datetimepicker"
                      style={{ height: "55px" }}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="time" id="time" data-target-input="nearest">
                    <input
                      type="text"
                      className="form-control datetimepicker-input"
                      placeholder="Choose Date"
                      data-target="#time"
                      data-toggle="datetimepicker"
                      style={{ height: "55px" }}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment End */}

      {/* Company Info Start */}
      <CompanyInfo />
      {/* Company Info End */}
    </>
  );
}
