import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Welcome</h1>
      <p>
        I'm Eugene Osminkin, data analyst from San Diego, CA.
        <br />
        Here you can soon take a look at a couple of things that I found out
        interesting and even built a couple of them.
        <br />
        Stay tuned!
        <br />
        <br />
        Contact me <Link to="/contact">here</Link>.
      </p>
    </Layout>
  )
}

export default IndexPage