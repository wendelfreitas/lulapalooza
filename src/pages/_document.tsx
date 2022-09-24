import Document, { Html, Main, Head, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='pt-br'>
        <Head>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin=''
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap'
            rel='stylesheet'
          />

          <link rel='shortcut icon' href='/favicon.ico' type='image/ico' />

          {/* OG Tags */}
          <meta name='theme-color' content='#101D42' />
          <meta property='og:locale' content='pt-br' />
          <meta property='og:site_name' content='Next Boilerplate' />

          {/* Primary Meta Tags */}
          <meta name='title' content='Lulapalooza' />
          <meta
            name='description'
            content='Hello World! Welcome to my Next Boilerplate website.'
          />

          {/* Open Graph / Facebook METADATA */}
          <meta property='og:type' content='Next Boilerplate Website' />
          <meta
            property='og:url'
            content='https://next-boilerplate-url-here.com'
          />
          <meta property='og:title' content='Next Boilerplate - Website' />
          <meta
            property='og:description'
            content='Hello World! Welcome to my Next Boilerplate website.'
          />

          <meta property='og:image' content='/metadata-image.png' />

          {/* Twitter METADATA */}
          <meta property='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:url'
            content='https://next-boilerplate-url-here.com'
          />
          <meta property='twitter:title' content='Next Boilerplate - Website' />
          <meta
            property='twitter:description'
            content='Hello World! Welcome to my Next Boilerplate website.'
          />

          <meta property='twitter:image' content='/metadata-image.png' />

          <link
            rel='apple-touch-icon'
            href='/favicon.ico'
            sizes='180x180'
            title='favicon'
          />

          <link rel='canonical' href='https://next-boilerplate-url-here.com' />
        </Head>{' '}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
