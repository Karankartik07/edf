import CompanyInfo from "../../components/CompanyInfo";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-1 text-white animated slideInDown">
            Contact Us
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
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Company Info Start */}
      {/* <CompanyInfo /> */}
      {/* Company Info End */}

      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h4 className="section-title">Contact Us</h4>
            <h1 className="display-5 mb-4">
              If You Have Any Query, Please Feel Free Contact Us
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="d-flex flex-column justify-content-between h-100">
                <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark"
                    style={{ width: "55px", height: "55px" }}
                  >
                    <i className="fa fa-map-marker-alt text-primary"></i>
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Address</p>
                    <h3 className="mb-0">Flat no.208, skg merlin apartment, Sector 13, Vasundhara, Ghaziabad, Uttar Pradesh 201012</h3>
                  </div>
                </div>
                <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark"
                    style={{ width: "55px", height: "55px" }}
                  >
                    <i className="fa fa-phone-alt text-primary"></i>
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Call Us Now</p>
                    <h3 className="mb-0">+91 9810166061 | +91 8073123896</h3>
                  </div>
                </div>
                <div className="bg-light d-flex align-items-center w-100 p-4">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark"
                    style={{ width: "55px", height: "55px" }}
                  >
                    <i className="fa fa-envelope-open text-primary"></i>
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Mail Us Now</p>
                    <h3 className="mb-0">info@ekistiquedesignfora.com</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}

      {/* Google Map Start */}
      <div className="container-xxl pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
        <iframe
          className="w-100 mb-n2"
          style={{ height: "450px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1892395058435!2d77.3630165!3d28.654051900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb42dd0e8bb9%3A0x5de66af4778aa9f5!2sEkistique%20Design%20Fora%20(EDF)!5e0!3m2!1sen!2sin!4v1776495909032!5m2!1sen!2sin"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      {/* Google Map End */}
    </>
  );
}
