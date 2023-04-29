import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3J3RTR030Z%22%3E" strategy='afterInteractive' />
      <Script id="google-analytics" strategy="afterInteractive">
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3J3RTR030Z');
          `
        }
      </Script>
    </Head>
    <Component {...pageProps} />
  </>
}
