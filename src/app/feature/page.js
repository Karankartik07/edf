import CompanyInfo from "../../components/CompanyInfo";

export default function Feature() {
  return (
    <>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-1 text-white animated slideInDown">
            Features
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
                Features
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

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
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row g-4">
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img
                      className="flex-shrink-0"
                      src="/img/icons/icon-2.png"
                      alt="Icon"
                    />
                    <div className="ms-4">
                      <h3>Design Approach</h3>
                      <p className="mb-0">
                        Erat ipsum justo amet duo et elitr dolor, est duo duo
                        eos lorem sed diam stet diam sed stet.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img
                      className="flex-shrink-0"
                      src="/img/icons/icon-3.png"
                      alt="Icon"
                    />
                    <div className="ms-4">
                      <h3>Innovative Solutions</h3>
                      <p className="mb-0">
                        Erat ipsum justo amet duo et elitr dolor, est duo duo
                        eos lorem sed diam stet diam sed stet.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img
                      className="flex-shrink-0"
                      src="/img/icons/icon-4.png"
                      alt="Icon"
                    />
                    <div className="ms-4">
                      <h3>Project Management</h3>
                      <p className="mb-0">
                        Erat ipsum justo amet duo et elitr dolor, est duo duo
                        eos lorem sed diam stet diam sed stet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="feature-img">
                <img className="img-fluid" src="/img/about-2.jpg" alt="" />
                <img className="img-fluid" src="/img/about-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}

      {/* Company Info Start */}
      <CompanyInfo />
      {/* Company Info End */}
    </>
  );
}
