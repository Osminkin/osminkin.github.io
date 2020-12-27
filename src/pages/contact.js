import React, { useState} from "react"
import { IoJournalOutline } from "react-icons/io5"

import Layout from "../components/layout"

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: ""
  })

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState})
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault()
  }

  return (
    <div>
      <Layout>
        <h1>Contact Me</h1>
        <a href="mailto:eugeneosm@gmail.com">eugeneosm@gmail.com</a>
        <form
          name="contact"
          netlify
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
        <input type="hidden" name="form-name" value="contact" />
        <input
          name="name"
          placeholder="Your Name"
          type="text"
          onChange={handleChange}
          value={formState.name}
        />
        <input
          name="email"
          placeholder="name@name.com"
          type="email"
          onChange={handleChange}
          value={formState.email}
        />
        <textarea name="message" />
        <button type="submit">Send</button>
        </form>
      </Layout>
    </div>
  )
}

export default ContactPage
