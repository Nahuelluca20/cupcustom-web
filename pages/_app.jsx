import "../styles/globals.css";
import {ChakraProvider} from "@chakra-ui/react";
import Head from "next/head";

import Nav from "../components/nav";
import Footer from "../components/footer";
import customTheme from "../theme";

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <title>Cupcustom | Sublimaciones</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        {/* <link href="/nahuel.png" rel="shortcut icon" /> */}
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
