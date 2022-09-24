import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import GlobalStyles from 'styles/globalStyles';
import { lightTheme } from 'styles/themes/light';
import { Head, Html } from 'next/document';

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
