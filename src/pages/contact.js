import React from "react"
import Layout from "../components/Layout"
import ContactHeader from "../components/ContactHeader"
import ContactMain from "../components/ContactMain"
import ContactForm from "../components/ContactForm"
import ContactMap from "../components/ContactMap"

const contact = () => {
  return (
    <Layout pageTitle="Contact Us">
      <ContactHeader />
      <ContactMain />
      <ContactForm />
      <ContactMap />
    </Layout>
  )
}
export default contact
