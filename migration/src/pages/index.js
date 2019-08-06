import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CarbonEmbed from '../components/carbon-embed'

const IndexPage = () => (
  <Layout>
    <SEO title={'Home'} />
    <p>
      WebPipes are a work-in-progress open proposal for linking together web
      services. Essentially, you can think of Webpipes as the web version of
      Unix programs; small utilities available over HTTP that do one thing, and
      do it well. Fittingly, Webpipes follow the Unix philosophy:
    </p>
    <p>
      The <strong>Parse URL</strong> webpipe is a great example and introduction
      to to the ecosystem. There's live example & source code available `
      <a href='https://github.com/webpipes/block-demos'>parse-url.webpip.es</a>
      `). That same repo also contains a few other handy webpipe examples for
      you to follow along with and use however you see fit. Other examples
      include: e`convert-markdown-to-html`,
      `inspect-hostname-dns`,`calculate-square-root`, `pkg-news-api`
      `scrape-url-html`, `parse-rss`, `upload-url-to-s3`.
    </p>
    <hr />
    <h2>But... why?</h2>
    <p>
      Aside from the beauty of composing pipelines, individual Webpipes can be
      called directly as well. In fact, Webpipes and pipelines both share the
      same interface for handling inputs and outputs. This common interface
      provides users easy use since clients can abstract away the underlying
      logic and requirements behind requests, inputs, outputs, and types.
    </p>
    <p>
      Further, this common input/output interface essentially eliminates the
      time necessary to discover, research, learn & implement new APIs. All
      developers need to know is the name of an API to begin making calls.
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

    <p>
      Once Webpipe registries become available, URL calls can be reduced down to
      just a namespace, like <code>@github/convert-markdown</code> or{' '}
      <code>@google/vision/detect-image-text</code> .
    </p>

    <hr />
    <h2>How do they work?</h2>
    <p>
      Since a Webpipe is language endpoint and essentially just a script that
      receives input via HTTP POST/GET, there's not much else to know other than
      how to structure the output.
    </p>
    <p>
      The core behaviorial requirements are handled by client and server
      libraries.{' '}
    </p>
    <p>
      Precise requirements are covered in the{' '}
      <a href='https://github.com/webpipes/spec'>specification</a> .
    </p>

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
  </Layout>
)

export default IndexPage
