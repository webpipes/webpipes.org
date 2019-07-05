import PropTypes from 'prop-types'
import React from 'react'

import imageLogo from '../images/webpipes-icon.svg'

const Header = ({ siteTitle }) => (
  <div className='mw6 mw7-ns center pt4 pa3 ph5-ns'>
    <header className='bg-white black-80 tc pv4 '>
      <img className='brand' src={imageLogo} />
      <h1 className='mb0 black fw6 f6'>
        Webpipes <span className='black-40 fw1'>(v0.2)</span>
      </h1>
      <h2 className='black-60 lh-copy mt0'>
        Building a programmable web for everyone.
      </h2>
      {/*      <nav className='bt bb tc mw7 center mt4'>
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
            <a
              className='dib'
              href='https://www.github.com/webpipes/node-webpipe'
            >
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
            <a
              className='dib'
              href='https://github.com/matthewhudson/webpipe.php'
            >
              PHP Client
            </a>
          </li>
        </ul>
        <p className='f5 f4-m f3-l fw2 black-70 mb0 lh-copy'>Community</p>
        <ul className='ml0 pl0'>
          <li className='dib'>
            <a href='https://join.slack.com/t/webpipes/shared_invite/enQtNjgwMzUzMDk1NzAxLTUwNDE5ZTJmMTgyMWI4MjgxOGNjOWEzNzU3Yzc5MjM0M2E1MzJlYTI0OTY1Njc3YWJhODMxYzZkZjY2MzMyNDY'>
              Slack
            </a>
          </li>
          <li className='dib'>
            <a href='https://www.github.com/webpipes'>GitHub</a>
          </li>
          <li className='dib'>
            <a href='https://groups.google.com/forum/#!forum/webpipes'>
              Google Group
            </a>
          </li>
        </ul>
      </nav>
      }
    ' */}
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
