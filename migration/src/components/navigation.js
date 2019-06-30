import PropTypes from 'prop-types'
import React from 'react'

import Image from '../components/image'
import Link from '../components/link'

const Header = ({ siteTitle }) => (
  <aside className='fl w-20 pa2'>
    <h1>
      <Link to='/'>
        <Image />
      </Link>
    </h1>

    <ul>
      <li>
        <Link to='/history/'>
          Specification <small className='black-70 bold'>(v0.1)</small>
        </Link>
      </li>
      <li>
        <Link to='/history/'>History</Link>
      </li>
      <li>
        <Link to='http://webpipes.slack.com'>Slack</Link>
      </li>
    </ul>

    <small>Use #webpipes </small>
  </aside>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
