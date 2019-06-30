import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title={'Webpipes.org'} />
    <h1 className='f2 mb0 sans-serif'>Well... why not?</h1>
    <h2 className='f4 mb0 mt3 db f-subheadling sans-serif'>
      First, what is Tachyons?
    </h2>
    <p>
      <a
        className='link white b hover-bg-blue-new'
        href='http://tachyons.io/'
        target='_blank'
      >
        Tachyons
      </a>{' '}
      is a css toolkit. It's mobile-first 📱, highly-readable 📖 and well
      documented 📘📙📕. It allows you to build pages and components with as
      little css as possible using classes.
    </p>
    <h2 className='f4 mb0 mt3 db f-subheadling sans-serif'>And Unsplash?</h2>
    <p>
      <a
        className='link white b hover-bg-blue-new'
        href='https://unsplash.com/'
        target='_blank'
      >
        Unsplash
      </a>{' '}
      is a giant photography community 📷 filled with{' '}
      <em>free (do whatever you want)</em> high-resolution photos 🖼️. It is{' '}
      <em>amazing</em> 🙏.
    </p>
    <h2 className='f4 mb0 mt4 db sans-serif'>
      So why did we build Tachy.Tools?
    </h2>
    <ol>
      <li className='mb2'>
        We 💓💓💓 Tachyons and want to tell <em>everyone</em> 🌎 about it.
      </li>
      <li className='mb2'>
        We want to show what's possible with it without using any custom css.{' '}
        <em>It's frickin impressive</em> 😮😅.
      </li>
      <li className='mb2'>
        A lot of designers and developers feel overwhelmed 😰 when they look
        into Tachyons. Tools like these can help them learn 🤓 and better
        understand how to get started.
      </li>
      <li className='mb2'>
        These tools can serve as starter templates for projects. Tachyons makes
        it really easy to re-use components ♻️ to extend 🚀 these templates into
        full sites or products.
      </li>
      <li className='mb2'>We enjoyed every second spent building these 😄.</li>
    </ol>
    <h2 className='f4 mb0 mt4 db sans-serif'>What can I do with these?</h2>
    <p>
      Absolutely anything you want! Dissect them with developer tools to learn
      Tachyons, extend them into full sites or turn them into something else!
    </p>
    <h2 className='f4 mb0 mt4 db sans-serif'>
      What else will you be releasing?
    </h2>
    <p>
      We'll be releasing new things regularly ✨⌚. Templates and components
      like responsive menus, sign up forms, ui kits and many more! Send us an{' '}
      <a
        className='link white b hover-bg-blue-new'
        href='mailto:we.are@blunt.af'
      >
        email ✉️
      </a>{' '}
      if you'd like to see something!
    </p>
    <h2 className='f4 mb0 mt4 db sans-serif'>Who built this?</h2>
    <p>
      We are{' '}
      <a
        href='http://blunt.af'
        target='_blank'
        className='link white b hover-bg-blue-new'
      >
        Blunt 😻🐻
      </a>
      . A small team that likes to create things that <em>help</em>,{' '}
      <em>challenge</em>, and <em>inspire</em>.
    </p>
  </Layout>
)

export default IndexPage
