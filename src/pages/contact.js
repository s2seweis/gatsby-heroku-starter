import React from "react"
import Seo from "../components/Seo"
import '../assets/css/contact.css';

const contact = () => {

  return (
    <>
      <Seo title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formsubmit.co/weissenborn.sebastian@gmail.com" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input type="hidden" name="_captcha" value="false"></input>
              <input type="hidden" name="_next" value="https://precious-conkies-b8586b.netlify.app/thankyou"></input>
              <input type="hidden" name="_subject" value="Message From My Portfolio!!!"></input>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button style={{backgroundColor:"lightblue"}} type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact