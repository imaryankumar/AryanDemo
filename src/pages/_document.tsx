import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
    <title>Portfolio Website</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="shortcut icon" href="/portlogo.png" key="shortcutIcon" />
      <link rel="manifest" href="/manifest.json" />
      </Head> 
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
