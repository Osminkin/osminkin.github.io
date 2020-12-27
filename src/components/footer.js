import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import footerStyles from './footer.module.scss'
import { IoLogoLinkedin, IoLogoFacebook, IoLogoGithub } from "react-icons/io5"

const Footer = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)

  return (
    <footer className={footerStyles.footer}>
      <p>
        <a 
          className={footerStyles.logo} 
          href="https://github.com/Osminkin"
        >
          <IoLogoGithub />
        </a>
        &nbsp;
        <a
          className={footerStyles.logo}
          href="https://www.linkedin.com/in/osminkin/"
        >
          <IoLogoLinkedin />
        </a>
        &nbsp;
        <a
          className={footerStyles.logo}
          href="https://www.facebook.com/eugene.vlg"
        >
          <IoLogoFacebook />
        </a>
        &nbsp; Created by {data.site.siteMetadata.author} © 2020
      </p>
    </footer>
  )
}

export default Footer