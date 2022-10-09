# Demo of Next.js inline script onLoad issue

This is a demo project to illustrate a potential issue found with `next/script` on Next.js v12.3.1. The `onLoad` function passed to `next/script` isn't being called for inline scripts with either `afterInteractive` or `lazyOnLoad` strategies.

Run locally with `yarn dev`

Deployed to Vercel at 
