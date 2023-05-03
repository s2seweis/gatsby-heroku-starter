import React from "react"
import Seo from "../components/Seo"
const thankyou = () => {
  return (
    <>
      <Seo title="Thank You" />
      <section className="contact-page">
        <article style={{height:"200px"}} className="contact-form">

          <h2 style={{marginTop:"30px" }}>Thank You !!!</h2>
          <h3>I got your email. Will contact you soon.</h3>
          
        </article>
      </section>
    </>
  )
}

export default thankyou
