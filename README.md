Tests latest PSDS components installed on Next.js. These components use Global CSS. NextJS requires separate imports for components and styles. Styles can only be imported in _app.jsx. This rule is very bothersom, see [vercel/next.js #19936](https://github.com/vercel/next.js/issues/19936). Until such time as Next.js changes its mind, we may be doing something like this.

See [pluralsight/design-system#fix/nextjs](https://github.com/pluralsight/design-system/commits/fix/nextjs) for required changes to PSDS.
