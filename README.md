# Demo of Next.js inline script onLoad issue

**UPDATE**: HTML `script` doesn't fire `load` events for inline scripts, so it makes sense `next/script` doesn't fire them either. Probably, the right solution is to use the `onReady` prop to check if an inline script has been mounted, regardless of its loading strategy.

---

This is a demo project to illustrate a potential issue found with `next/script` on Next.js v12.3.1. The `onLoad` function passed to `next/script` isn't being called for inline scripts with either `afterInteractive` or `lazyOnLoad` strategies.

Run locally with `yarn dev`

Deployed with Vercel to [https://nextjs-inline-script-onload-issue-demo.vercel.app/](https://nextjs-inline-script-onload-issue-demo.vercel.app/) 
