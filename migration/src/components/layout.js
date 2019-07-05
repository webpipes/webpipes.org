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
    <div className='mw6 mw7-ns center pt4 pa3 ph5-ns'>
      <Header siteTitle={data.site.siteMetadata.title} />
      <section className='cf'>
        <main className='fl w-8 pl4'>{children}</main>
      </section>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
