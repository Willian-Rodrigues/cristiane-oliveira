import "@styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/";
import Header from "ui/components/Header/Header";
import Footer from "ui/components/Footer/Footer";
import theme from "ui/theme/theme";
import { AppContainer } from "ui/styles/pagesStyle/_app.syile";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* DEFINE LINK DA FONTE POPPINS E FONTE DE ICONES  */}
        <title>Cristiane Oliveira</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="logo.png" sizes="any" type="image/svg+xml" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* THEMEPROVIDER DEIXA O TEMA DA APLICAÇÃO DISPONIVEL EM TODOS ELEMENTOS FILHOS NESSE CASO TODAS AS PAGINAS */}
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          {/* COMPONENTE SÃO TODAS NOSSAS PAGINAS */}
          <Component {...pageProps}></Component>
          {/* <Footer /> */}
        </AppContainer>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
