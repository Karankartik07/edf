import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  verification: {
    google: "IjO_4JIzfIJ37GkI9tacW0WQrkWAiBcZ7gqb6tYbjjc",
  },
  alternate:{
    canonical: "https://www.ekistiquedesignfora.com",
  },
  title: "Ekistique Design Fora | Modern Architecture & Design Studio",
  description:
    "Ekistique Design Fora offers innovative architecture and interior design solutions, creating modern, functional, and elegant spaces for residential and commercial projects.",
};
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ekistique Design Fora | Modern Architecture & Design Studio ",
  operatingSystem: "Web",
  applicationCategory: "BusinessApplication",
  description:
    "Ekistique Design Fora offers innovative architecture and interior design solutions, creating modern, functional, and elegant spaces for residential and commercial projects.",
  url: "www.ekistiquedesignfora.com",
  image:
    "https://res.cloudinary.com/dxlykgx6w/image/upload/v1776430340/ekistique_design_fora_fdesc1.jpg",
  publisher: {
    "@type": "Organization",
    name: "Ekistique Design Fora",
    logo: {
      "@type": "ImageObject",
      url: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1776430340/ekistique_design_fora_fdesc1.jpg",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "www.ekistiquedesignfora.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google site verification */}
        <meta
          name="google-site-verification"
          content="google8feafa81998cb8e1.html"
        />

        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Teko:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Icon Font Stylesheet */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        {/* Libraries Stylesheet */}
        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
        <link
          href="/lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link
          href="/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
          rel="stylesheet"
        />

        {/* Customized Bootstrap Stylesheet */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />

        {/* Template Stylesheet */}
        <link href="/css/style.css" rel="stylesheet" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />

        <Script
          id="softwareSchema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />

        {/* JavaScript Libraries */}
        <Script
          src="https://code.jquery.com/jquery-3.4.1.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/lib/wow/wow.min.js" strategy="beforeInteractive" />
        <Script src="/lib/easing/easing.min.js" strategy="lazyOnload" />
        <Script src="/lib/waypoints/waypoints.min.js" strategy="lazyOnload" />
        <Script src="/lib/counterup/counterup.min.js" strategy="lazyOnload" />
        <Script
          src="/lib/owlcarousel/owl.carousel.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/lib/tempusdominus/js/moment.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/lib/tempusdominus/js/moment-timezone.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"
          strategy="lazyOnload"
        />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
