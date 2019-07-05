import PropTypes from 'prop-types'
import React from 'react'

import Link from '../components/link'

const Sidebar = ({ siteTitle }) => (
  <aside className='fl w-25'>
    <p className='f4 fw5 f4-m f3-l fw2 black-70 mb0 lh-copy'>Overview</p>
    <ul className='ml0 pl0 f5'>
      <li className='dib'>
        <Link to='/'>Home</Link>
      </li>
      <li className='dib'>
        <Link to='https://github.com/webpipes/spec'>Specification</Link>
      </li>
      <li className='dib'>
        <Link to='/faq/'>FAQ</Link>
      </li>
      <li className='dib'>
        <Link to='/history/'>History</Link>
      </li>
    </ul>

    <p className='f4 fw5 f4-m f3-l black-70 mb0 lh-copy'>Libraries</p>
    <ul className='ml0 pl0 f5 dib'>
      <li>
        <a className='dib' href='https://www.github.com/webpipes/node-webpipe'>
          JavaScript Server
        </a>
      </li>
      <li>
        <a className='dib' href='https://github.com/webpipes/webpipe.js/'>
          JavaScript Client
        </a>
      </li>
      <li>
        <a className='dib' href='https://github.com/fkautz/golang-webpipes'>
          Go Server
        </a>
      </li>
      <li>
        <a className='dib' href='https://github.com/matthewhudson/webpipe.php'>
          PHP Client
        </a>
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
Sidebar.propTypes = {
  siteTitle: PropTypes.string
}

Sidebar.defaultProps = {
  siteTitle: ``
}

export default Sidebar
