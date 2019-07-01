import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title={'Webpipes.org'} />
    <h1>Webpipes</h1>
    <h2>First.. what are Webpipes?</h2>
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
    <h2>How do they work?</h2>
    <p>
      Since a Webpipe is essentially just a script that receives input via HTTP
      POST/GET, there's not much else to know other than how to structure the
      output. Their precise behavior is covered in the
      <a href='https://github.com/webpipes/spec'>Webpipe Specification</a>.
    </p>

    <hr />
    <h2>Where can I find a full list Webpipes?</h2>
    <p>
      You can view a list of some
      <a href='#examples'> example Webpipes</a>, or on the
      <a href='https://github.com/webpipes/'>Webpipes.org GitHub</a>.
    </p>

    <hr />
    <a name='spec'></a>
    <h2>Is there a Webpipe specification?</h2>
    <p>
      To participate in the wider Webpipe ecosystem, a few conventions have been
      adopted which enables Webpipes to "speak" to one another. Check out the
      <a href='https://github.com/webpipes/spec'>Webpipe Spec</a>.
    </p>

    <hr />
    <h2>What's the difference between WebHooks and Webpipes?</h2>
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
      Read the
      <a href='https://www.github.com/webpipes/spec'>Webpipes Specification</a>
      to learn the specifics.
    </p>

    <hr />
    <a name='examples'></a>
    <h2>Example Webpipes</h2>
    <ul>
      <li>
        <a href='https://www.github.com/webpipes/block-minify-css/'>
          Minify CSS
        </a>
        - Takes CSS markup and compresses it.
      </li>
      <li>
        <a href='https://www.github.com/webpipes/block-parse-markdown/'>
          Parse Markdown
        </a>
        - Takes Markdown data and converts it to HTML.
      </li>
      <li>
        <a href='https://www.github.com/webpipes/block-parse-rss/'>Parse RSS</a>
        - Takes an RSS feed and splits it into an array of records.
      </li>
      <li>
        <a href='https://www.github.com/webpipes/block-send-email/'>
          Send Email
        </a>
        - Send an email.
      </li>
      <li>
        <a href='https://www.github.com/webpipes/block-formatter/'>Formatter</a>
        - Input a mustache template and some arguments, outputs a formatted
        string.
      </li>
    </ul>

    <p>
      See more in the
      <a href='http://registry.webpipes.org/'>Webpipe Registry &rarr;</a>
    </p>

    <hr />
    <h2>Resources</h2>
    <ul>
      <li>
        Specification:
        <a href='https://www.github.com/webpipes/spec'>Webpipe Specification</a>
        - A definitive compilation of standards and best practices.
      </li>

      <li>
        GitHub:
        <a href='https://www.github.com/webpipes'>Webpipes GitHub</a> -
        Repository of code, discussion, and issues.
      </li>
      <li>
        Group:
        <a href='https://groups.google.com/forum/#!forum/webpipes'>
          Webpipe Group
        </a>
        - A Google Group for community discussion.
      </li>
      <li>
        Testing: <a href='http://www.postbin.org/'>PostBin</a> - Debug
        webhooks/pipes by capturing and logging requests.
      </li>
      <li>
        Testing: <a href='http://www.webhookapp.com/'>WebHookApp</a> - Debug
        your HTTP requests. Auto-generates a cURL command.
      </li>
    </ul>

    <hr />
    <h2>Specification Authors</h2>
    <ul>
      <li>
        <a href='http://www.progrium.com/'>Jeff Lindsay</a> - Creator and
        evangelist of <a href='http://www.webhooks.org/'>WebHooks</a>
      </li>
      <li>
        <a href='https://thematthewhudson.com/'>Matthew Hudson</a> - Maintains
        <a href='https://github.com/webpipes/webpipe.js/'>Webpipe.js</a>,
        <a href='https://github.com/matthewhudson/webpipe.php'>Webpipe.php</a>
      </li>
      <li>
        <a href='http://tlrobinson.net/'>Tom Robinson</a> - Maintains
        <a href='https://www.github.com/webpipes/node-webpipe'>node-webpipe</a>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
