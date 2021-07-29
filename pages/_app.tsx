import '@pluralsight/ps-design-system-normalize'
import '@pluralsight/ps-design-system-button/styles.css'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
