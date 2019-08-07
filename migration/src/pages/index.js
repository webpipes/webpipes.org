import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CarbonEmbed from '../components/carbon-embed'

const IndexPage = () => (
  <Layout>
    <SEO title={'Home'} />
    <p>
      The WebPipe Spec is an open proposal allowing services to link together,
      invoke one another, and easily participate as a small portion of larger
      services and process flows
    </p>
    <CarbonEmbed
      src="https://carbon.now.sh/embed/?bg=rgba(255%2C255%2C255%2C1)&t=one-light&wt=none&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=1x&wm=false&code=const%2520webpipeURL%2520%253D%2520'https%253A%252F%252Fparse-markdown-wp.com%252F'%250Aconst%2520inputs%2520%253D%2520%257B%2520markdown%253A%2520'*hello%2520world*'%2520%257D%250A%250Awebpipe.execute(webpipeURL%252C%2520inputs%252C%2520(err%252C%2520data)%2520%253D%253E%2520%257B%250A%2520%2520if%2520(err)%2520return%2520console.warn(err)%250A%250A%2520%2520%252F%252F%2520Prints%2520the%2520response%2520of%2520the%2520Parse%2520Markdown%2520webpipe.%250A%2520%2520console.log(data)%250A%257D)%250A"
      style={{
        height: '275px',
        border: '0',
        overflow: 'hidden',
        maxwidth: '510px',
        width: '100%'
      }}
      sandbox='allow-scripts allow-same-origin'
    />
    <a
      className='center f6 link dim br2 ba bw1 ph3 pv2 mb2 dib near-black'
      href='https://repl.it/@webpipe/client'
      title='GitHub-flavored Markdown'>
      Try Live w/ @repl.it
    </a>
    <p>
      And more examples on{' '}
      <a
        href='https://github.com/webpipes/webpipe-examples'
        title='GitHub for example webpipes'
        target='_blank'>
        GitHub
      </a>{' '}
      and on{' '}
      <a
        href='https://webpip.es'
        title='Host for example webpipes'
        target='_blank'>
        webpip.es
      </a>
      .
    </p>
    <hr />
    <h3>Live WebPipes</h3>
    <ul>
      <li>
        <a href='https://webpip.es/scrape-url-html'>scrape-url-html</a>
      </li>
      <li>
        <a href='https://webpip.es/parse-url'>parse-url</a>
      </li>
      <li>
        <a href='https://webpip.es/upload-url-to-s3'>upload-url-to-s3</a>
      </li>
      <li>
        <a href='https://webpip.es/convert-markdown-to-html'>
          convert-markdown-to-html
        </a>
      </li>
      <li>
        <a href='https://webpip.es/parse-rss'>parse-rss</a>
      </li>
      <li>
        <a href='https://webpip.es/pkg-news-api'>pkg-news-api</a>
      </li>
      <li>
        <a href='https://webpip.es/inspect-hostname-dns'>
          inspect-hostname-dns
        </a>
      </li>
      <li>
        <a href='calculate-square-root'>calculate-square-root</a>
      </li>
    </ul>
    <hr />
    <h3>Client & Server Libraries</h3>
    <ul>
      <li>
        <a href='https://www.github.com/webpipes/node-webpipe'>
          Node/JavaScript Server
        </a>
      </li>
      <li>
        <a href='https://github.com/webpipes/webpipe.js/'>JavaScript Client</a>
      </li>
      <li>
        <a href='https://github.com/fkautz/golang-webpipes'>Go Server</a>
      </li>
      <li>
        <a href='https://github.com/matthewhudson/webpipe.php'>PHP Client</a>
      </li>
    </ul>
    <h3>Community</h3>
    <ul className='ml0  pl0'>
      <li>
        <a href='https://join.slack.com/t/webpipes/shared_invite/enQtNjgwMzUzMDk1NzAxLTUwNDE5ZTJmMTgyMWI4MjgxOGNjOWEzNzU3Yzc5MjM0M2E1MzJlYTI0OTY1Njc3YWJhODMxYzZkZjY2MzMyNDY'>
          Slack
        </a>
      </li>
      <li>
        <a href='https://www.github.com/webpipes'>GitHub</a>
      </li>
      <li>
        <a href='https://spectrum.chat/webpipes?tab=posts'>Spectrum</a>
      </li>
      <li>
        <a href='https://groups.google.com/forum/#!forum/webpipes'>
          Google Group
        </a>
      </li>
    </ul>
    <hr />
    <h2>Specification Authors</h2>
    <ul>
      <li>
        <a href='http://www.progrium.com/'>Jeff Lindsay</a>
      </li>
      <li>
        <a href='https://hudson.dev/'>Matthew Hudson</a>
      </li>
      <li>
        <a href='http://tlrobinson.net/'>Tom Robinson</a>
      </li>
    </ul>
    <hr />
    <p>
      View this project on{' '}
      <a
        href='https://github.com/webpipes/webpipe-examples'
        title='GitHub for this project'
        target='_blank'>
        GitHub
      </a>
    </p>
  </Layout>
)

export default IndexPage
