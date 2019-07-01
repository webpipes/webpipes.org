import PropTypes from 'prop-types'
import React from 'react'

import Image from '../components/image'
import Link from '../components/link'

const Header = ({ siteTitle }) => (
  <aside className='fl w-20'>
    <h1 className='mb0'>
      <Link to='/' className='db'>
        <Image />
      </Link>
    </h1>

    <p className='f5 f4-m f3-l fw2 black-70 mb0 lh-copy'>Overview</p>
    <ul className='ml0 pl0'>
      <li>
        <Link to='/'>Introduction</Link>
      </li>
      <li>
        <Link to='https://github.com/webpipes/spec'>Specification</Link>
      </li>
      <li>
        <Link to='/history/'>History</Link>
      </li>
    </ul>

    <p className='f5 f4-m f3-l fw2 black-70 mb0 lh-copy'>Libraries</p>
    <ul className='ml0 pl0'>
      <li>
        <a href='https://www.github.com/webpipes/node-webpipe'>
          JavaScript Server
        </a>
      </li>
      <li>
        <a href='https://github.com/webpipes/webpipe.js/'>JavaScript Client</a>
      </li>
      <li>
        <a href='https://github.com/matthewhudson/webpipe.php'>PHP Client</a>
      </li>
    </ul>

    <p className='f5 f4-m f3-l fw2 black-70 mb0 lh-copy'>Community</p>

    <ul className='ml0 pl0'>
      <li>
        <a href='https://join.slack.com/t/webpipes/shared_invite/enQtNjgwMzUzMDk1NzAxLTUwNDE5ZTJmMTgyMWI4MjgxOGNjOWEzNzU3Yzc5MjM0M2E1MzJlYTI0OTY1Njc3YWJhODMxYzZkZjY2MzMyNDY'>
          Slack
        </a>
      </li>
      <li>
        <a href='https://www.github.com/webpipes'>GitHub</a>
      </li>
      <li>
        <a href='https://groups.google.com/forum/#!forum/webpipes'>
          Google Group
        </a>
      </li>
    </ul>

    <small className='black-30'>#webpipes</small>
  </aside>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
