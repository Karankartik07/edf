import React from "react";

export default function CompanyInfo() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center flex justify-center items-center flex-col mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <img
            src="img/icons/icon-1.png"
            alt="Ekistique Design Fora Logo"
            className="mb-4"
            style={{ width: "100px", height: "100px" }}
          />
          <h1 className="display-5 mb-4">Ekistique Design Fora</h1>
          <p className="fs-5 text-primary">
            Luxury Architecture | Healthcare & Hospitality Specialists
          </p>
          <p className="mb-4">Designing Landmark Spaces Across India</p>
        </div>

        {/* About Us */}
        <div className="row g-5 mb-5">
          <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
            <h2 className="section-title">About Us</h2>
            <p>
              Ekistique Design Fora is a premium architectural and structural
              design firm delivering high-performance healthcare, hospitality,
              residential, and commercial infrastructure across India. We
              specialize in technically advanced, aesthetically refined, and
              compliance-driven architectural solutions.
            </p>
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="row g-5 mb-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h3>Vision</h3>
            <p>
              To become a leading luxury architectural firm in India recognized
              for innovation, precision, and excellence in healthcare and
              hospitality infrastructure.
            </p>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h3>Mission</h3>
            <p>
              To design functional, sustainable, and iconic spaces that enhance
              operational efficiency, patient care, and guest experiences.
            </p>
          </div>
        </div>

        {/* Core Services */}
        <div className="row g-5 mb-5">
          <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
            <h2 className="section-title">Core Services</h2>
            <ul className="list-unstyled text-left !sm:text-center">
              <li>
                • Hospital & Healthcare Architecture (Multi-Specialty Hospitals,
                Nursing Homes, ICU & OT Planning, NABH Layouts)
              </li>
              <li>
                • Hotel & Hospitality Architecture (Luxury Hotels, Boutique
                Hotels, Banquet Spaces, Restaurant Design)
              </li>
              <li>
                • Residential & Commercial Architecture (Luxury Villas,
                Corporate Offices, Institutional Buildings)
              </li>
              <li>
                • Structural Engineering Consultancy (RCC Design, Structural
                Analysis, Stability Certification)
              </li>
              <li>
                • Smart Building & IT Infrastructure Integration (Automation,
                Security Systems, 3D Visualization)
              </li>
            </ul>
          </div>
        </div>

        {/* Healthcare and Hospitality */}
        <div className="row g-5 mb-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h3>Healthcare Infrastructure Expertise</h3>
            <p>
              We deliver hospital planning solutions focused on workflow
              efficiency, infection control, emergency access, and regulatory
              compliance. Our designs ensure patient comfort, operational
              clarity, and future scalability.
            </p>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h3>Hospitality & Luxury Design</h3>
            <p>
              Our hospitality projects reflect luxury, elegance, and operational
              functionality. We create immersive guest environments that elevate
              brand value and user experience.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="row g-5 mb-5">
          <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
            <h2 className="section-title mb-4">Leadership Team</h2>
            <div className="row">
              <div className="col-md-4  mb-4 flex justify-center align-items-center flex-col ">
                {/* <img
                  src="img/team-1.jpg"
                  alt="Sanjay Kumar Yadav"
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: "150px", height: "150px" }}
                /> */}
                <h4>Sanjay Kumar Yadav</h4>
                <p>CEO</p>
              </div>
              <div className="col-md-4  mb-4 flex justify-center align-items-center flex-col ">
                {/* <img
                  src="img/team-2.jpg"
                  alt="Arun Kumar"
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: "150px", height: "150px" }}
                /> */}
                <h4>Arun Kumar</h4>
                <p>Chief Managing Director</p>
              </div>
              <div className="col-md-4  mb-4 flex justify-center align-items-center flex-col ">
                {/* <img
                  src="img/team-3.jpg"
                  alt="Yudhveer Singh"
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: "150px", height: "150px" }}
                /> */}
                <h4>Yudhveer Singh</h4>
                <p>Director</p>
              </div>
              <div className="col-md-4  mb-4 flex justify-center align-items-center flex-col ">
                {/* <img
                  src="img/team-4.jpg"
                  alt="Kanishk Deshwal"
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: "150px", height: "150px" }}
                /> */}
                <h4>Kanishk Deshwal</h4>
                <p>Director</p>
              </div>
            
              <div className="col-md-4  mb-4 flex justify-center align-items-center flex-col ">
                {/* <img
                  src="img/team-2.jpg"
                  alt="Sachin Yadav"
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: "150px", height: "150px" }}
                /> */}
                <h4>Sachin Yadav</h4> 
                <p>Structural Engineer</p>
              </div>
              <div className="col-md-4  mb-4 flex justify-center align-items-center flex-col ">
                {/* <img
                  src="img/team-3.jpg"
                  alt="Ashish Yadav"
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: "150px", height: "150px" }}
                />    */}
                <h4>Ashish Yadav</h4>
                <p>IT Solutions Engineer</p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Focus */}
        <div className="row g-5 mb-5">
          <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
            <h3>SEO Focus & Market Positioning</h3>
            <ul className="list-unstyled">
              <li>• Hospital Architect in Delhi NCR</li>
              <li>• Healthcare Architecture Firm in India</li>
              <li>• Nursing Home Design Consultant</li>
              <li>• Hotel Architect in Delhi</li>
              <li>• Luxury Architectural Firm Delhi NCR</li>
              <li>• Structural Engineering Consultancy India</li>
              <li>• NABH Hospital Design Consultant</li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="row g-5">
          <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
            <h2 className="section-title">Contact Information</h2>
            <p>
              <strong>Phone:</strong> +91 9810166061 | +91 8073123896
            </p>
            <p>
              <strong>Location:</strong> Delhi NCR | Serving Pan India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
