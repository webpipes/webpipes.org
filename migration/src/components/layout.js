/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

// import Navigation from './navigation'
import Header from './header'
import '../stylesheets/tachyons.min.css'
import './layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className='mw6 mw7-ns center pt4 pb6 pa2 ph5-ns'>
      <Header siteTitle={data.site.siteMetadata.title} />
      <p className='tc pt0 mt0'>
        We're a handful of technologists developing an ecosystem of small,
        focused, composable and runtime-independent software. Sharing a common
        I/O interface, users can connect these units together to build unique
        and highly-customized solutions and dramatically broadening access to
        software development beyond today's traditional programmers.
      </p>
      <p>
        If any of this piques your interest, you should come join us on{' '}
        <a href='https://join.slack.com/t/webpipes/shared_invite/enQtNjgwMzUzMDk1NzAxLTUwNDE5ZTJmMTgyMWI4MjgxOGNjOWEzNzU3Yzc5MjM0M2E1MzJlYTI0OTY1Njc3YWJhODMxYzZkZjY2MzMyNDY'>
          Slack
        </a>
        , and <a href='https://www.github.com/webpipes'>GitHub</a>.
      </p>
      <section className='cf'>
        <main className='fl w-8'>{children}</main>
      </section>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
