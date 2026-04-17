import CompanyInfo from "../../components/CompanyInfo";

export default function Testimonial() {
  return (
    <>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-1 text-white animated slideInDown">
            Testimonial
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
                Testimonial
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h4 className="section-title">Testimonial</h4>
            <h1 className="display-5 mb-4">
              Thousands Of Customers Who Trust Us And Our Services
            </h1>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div
              className="testimonial-item text-center"
              data-dot="<img class='img-fluid' src='/img/testimonial-1.jpg' alt=''>"
            >
              <p className="fs-5">
                Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                clita erat magna elitr erat sit sit erat at rebum justo sea
                clita.
              </p>
              <h3>Client Name</h3>
              <span className="text-primary">Profession</span>
            </div>
            <div
              className="testimonial-item text-center"
              data-dot="<img class='img-fluid' src='/img/testimonial-2.jpg' alt=''>"
            >
              <p className="fs-5">
                Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                clita erat magna elitr erat sit sit erat at rebum justo sea
                clita.
              </p>
              <h3>Client Name</h3>
              <span className="text-primary">Profession</span>
            </div>
            <div
              className="testimonial-item text-center"
              data-dot="<img class='img-fluid' src='/img/testimonial-3.jpg' alt=''>"
            >
              <p className="fs-5">
                Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                clita erat magna elitr erat sit sit erat at rebum justo sea
                clita.
              </p>
              <h3>Client Name</h3>
              <span className="text-primary">Profession</span>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      {/* Company Info Start */}
      <CompanyInfo />
      {/* Company Info End */}
    </>
  );
}
