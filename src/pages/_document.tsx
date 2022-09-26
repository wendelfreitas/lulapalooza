import Document, { Html, Main, Head, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }: any) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(
      (App: JSX.IntrinsicAttributes) => (props: unknown) =>
        // @ts-ignore
        sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

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

          <meta name='title' content='Lulapalooza - Oct 1-2, Chacára, Bauru' />
          <meta
            name='description'
            content='Finalmente o aniversário da Bia e do Gui está chegando! O Lulapalooza está cheio de atrações para que o nosso sábado seja incrível!'
          />

          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://lulapalooza.com/' />
          <meta
            property='og:title'
            content='Lulapalooza - Oct 1-2, Chacára, Bauru'
          />
          <meta
            property='og:description'
            content='Finalmente o aniversário da Bia e do Gui está chegando! O Lulapalooza está cheio de atrações para que o nosso sábado seja incrível!'
          />
          <meta property='og:image' content='https://i.imgur.com/UtoGJW0.png' />

          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://metatags.io/' />
          <meta
            property='twitter:title'
            content='Lulapalooza - Oct 1-2, Chacára, Bauru'
          />
          <meta
            property='twitter:description'
            content='Finalmente o aniversário da Bia e do Gui está chegando! O Lulapalooza está cheio de atrações para que o nosso sábado seja incrível!'
          />
          <meta
            property='twitter:image'
            content='https://i.imgur.com/UtoGJW0.png'
          />

          <link
            rel='apple-touch-icon'
            href='/favicon.ico'
            sizes='180x180'
            title='favicon'
          />

          <link rel='canonical' href='https://lulapalooza.com' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
