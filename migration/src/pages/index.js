import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CarbonEmbed from '../components/carbon-embed'

const IndexPage = () => (
  <Layout>
    <SEO title={'Home'} />
    <h2>First... what are Webpipes?</h2>
    <p>
      Webpipes is a work-in-progress proposal for linking together web services.
      Essentially, you can think of Webpipes as UNIX programs. They are small
      utilities available over HTTP that do one thing, and do it well. Webpipes
      follow the Unix philosophy:
    </p>
    <ul>
      <li>Write programs that do one thing and do it well.</li>
      <li>Write programs to work together.</li>
      <li>
        Write programs to handle text streams, because that is a universal
        interface.
      </li>
    </ul>
    <p>
      The magic comes when you start chaining pipes together. You can create
      really amazing workflows by combining a few small pieces together.
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
      time necessary to discover, research, learn & implement new APIs.All
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
      <code>@google/vision/detect-image-text</code>.
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
      Precise behavior is covered in the{' '}
      <a href='https://github.com/webpipes/spec'>specification</a> .
    </p>
    <hr />
    <h2>Where can I find a full list Webpipes?</h2>
    <p>
      You can view a list of some <a href='#examples'> example Webpipes</a>, or
      on the <a href='https://github.com/webpipes/'>Webpipes.org GitHub</a>.
    </p>
    <hr />
    <a className='normalize' name='spec' />
    <h2>Is there a Webpipe specification?</h2>
    <p>
      To participate in the wider Webpipe ecosystem, a few conventions have been
      adopted which enables Webpipes to "speak" to one another. Check out the{' '}
      <a href='https://github.com/webpipes/spec'>Webpipe Spec</a>.
    </p>
    <hr />
    <h2>What's the difference between WebHooks and Webpipes?</h2>
    <p>
      Jeff Lindsay, the creator and evangelist behind Webhooks, is also one of
      orignal creators Webpipes.
    </p>
    <p>
      Although, WebHooks share much in common with Webpipes, each solve
      different problems. WebHooks were designed, in part, to solve the
      push/poll. Essentially, a WebHook is a URL callback since it responds to
      events. For example, GitHub implements WebHooks. On post-receive, GitHub
      calls a user-defined URL like a callback. It also feeds along a few
      arguments that tells you about that commit.
    </p>
    <p>
      Likewise, Webpipes are essentially simple scripts publicly accessible via
      a URL. You POST/GET some input, and it'll provide you some output.
    </p>
    <hr />
    <h2>Why should I care?</h2>
    <p>
      Although not yet widely implemented, Webpipes offer developers more
      leverage. By connecting small and independent units, the whole becomes
      greater than the sum of its parts.
    </p>
    <p>
      But the real beauty is the potential for Webpipes to enable the
      "programmable web" and an entirely manner for creating applications. Some
      folks have even experimented with wrapping Unix programs around HTTP.
    </p>
    <hr />
    <h2>How do I implement Webpipes?</h2>
    <p>
      Since Webpipes are basically just scriptlets, they're easy to implement.
      Read the{' '}
      <a href='https://www.github.com/webpipes/spec'>Webpipes Specification</a>{' '}
      to learn the specifics.
    </p>
    <hr />
    <a className='normalize' name='examples' />
    <h2>Example Webpipes</h2>
    <p>
      <b>Note 30/6/19</b> These example webpipes are currently migrating and may
      have sporadic availability this week.
    </p>
    <ul>
      <li>
        <a href='https://www.github.com/webpipes/block-minify-css/'>
          Minify CSS
        </a>
        <br /> Input CSS markup string and output compresses it.
      </li>
      <li>
        <a href='https://www.github.com/webpipes/block-parse-markdown/'>
          Parse Markdown
        </a>
        <br />
        Input a Markdown string and ouputs it to HTML.
      </li>
      <li>
        <a href='https://www.github.com/webpipes/block-parse-rss/'>Parse RSS</a>
        <br /> Input an RSS feed URL and outputs an array of records.
      </li>
      <li>
        <a href='https://www.github.com/webpipes/block-send-email/'>
          Send Email
        </a>
        <br /> Input email arguments and outputs send status.
      </li>
      <li>
        <a href='https://www.github.com/webpipes/block-formatter/'>Formatter</a>
        <br />
        Input a mustache template and some arguments, outputs a formatted
        string.
      </li>
    </ul>
    <hr />
    <h2>Resources</h2>
    <p>
      You can find us in a few places, but most we're active on{' '}
      <a href='https://www.github.com/webpipes'>GitHub</a> and{' '}
      <a href='https://join.slack.com/t/webpipes/shared_invite/enQtNjgwMzUzMDk1NzAxLTUwNDE5ZTJmMTgyMWI4MjgxOGNjOWEzNzU3Yzc5MjM0M2E1MzJlYTI0OTY1Njc3YWJhODMxYzZkZjY2MzMyNDY'>
        Slack
      </a>
      .
    </p>
    <h4 className='mb0'>Webpipe Libraries</h4>
    <ul>
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

    <h4 className='mb0'>Reading & Tools</h4>
    <ul>
      <li>
        <a href='https://www.github.com/webpipes/spec'>
          Official Specification
        </a>
        <br /> A definitive compilation of standards and best practices.
      </li>
      <li>
        <a href='http://www.postbin.org/'>PostBin</a> <br />
        Debug webhooks/pipes by capturing and logging requests.
      </li>
      <li>
        <a href='http://www.webhookapp.com/'>WebHookApp</a>
        <br /> Debug your HTTP requests. Auto-generates a cURL command.
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
  </Layout>
)

export default IndexPage
