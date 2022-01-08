import React from "react"
import Navbar from "./Navbar"
import Side from "./Side"
import Footer from "./Footer"
import Helmet from "react-helmet"

export default function Layout({ pageTitle, children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle} | Virtue Value Engineering</title>
        <meta name="description" content="Virtue Value Engineering" />
        <meta name="keywords" content="Virtue Value Engineering" />
        <meta name="subject" content="" />
        <meta name="copyright" content="" />
        <meta name="robots" content="" />
        <meta name="author" content="PragICTS, info@pragicts.com" />
        <meta name="reply-to" content="info@pragicts.com" />
        <meta name="owner" content="Virtue Value Engineering" />
        <meta property="og:title" content="Virtue Value Engineering" />
        <meta property="og:description" content="Virtue Value Engineering" />
        <meta name="twitter:description" content="Virtue Value Engineering" />
        <meta property="twitter:url" content="https://www.virtue.lk" />
        <meta property="twitter:title" content="Virtue Value Engineering" />
        <meta property="og:url" content="http://pragicts.com" />
        {/* <meta property="og:image" content={logo} /> */}
        <meta property="og:type" content="Company" />
        <meta property="og:site_name" content="Virtue Value Engineering" />
        <meta name="og:email" content="info@virtue.lk.com" />
        <meta name="og:phone_number" content="00 94 11 364 1642" />
        {/* <link rel="canonical" href="https://virtue.lk" /> */}
      </Helmet>
      <div className="first-transition"></div>

     
      <Side />
      <Navbar />

      {children}
      <Footer />
    </>
  )
}
