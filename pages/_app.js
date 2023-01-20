import React from 'react';
import '../styles/globals.css';
import 'instantsearch.css/themes/satellite-min.css';

function MyApp({ Component, pageProps, layoutProps }) {
  return <Component {...pageProps} {...layoutProps} />;
}

export default MyApp;

App.getInitialProps = async ({ Component, ctx }) => {
  return { pageProps: {prop: true}, layoutData: { layout: true } }
}
