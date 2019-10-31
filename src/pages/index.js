import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
      <Layout>
      <h1>Hello</h1>
      <h2>It's Eugene Osminkin</h2>
      <p>Contact me here: <Link to="/contact" >CLICK ME</Link></p>
      </Layout>
  )
}

export default IndexPage