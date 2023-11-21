import React from "react"
import Seo from "../components/Seo"

const thankyou = () => {
  return (
    <>
      <Seo title="Thank You" />
      <section className="contact-page">
        <article style={{height:"200px"}} className="contact-form">

          <h2 style={{marginTop:"30px" }}>Thank You !!!</h2>
          <p>Thank you for your E-Mail. </p>
          <p>I will soon come to you back.</p>
          
        </article>
      </section>
    </>
  )
}

export default thankyou