import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   body {
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      font-family: "Roboto";                         
   }
`;

export default class MyDocument extends Document {
   static async getInitialProps({ renderPage }) {
      const sheet = new ServerStyleSheet();
      const page = renderPage(App => props =>
         sheet.collectStyles(<App {...props} />)
      );
      const styleTags = sheet.getStyleElement();
      return { ...page, styleTags };
   }

   render() {
      return (
         <html lang="en">
            <Head>
               <meta name="description" content="A random site" />
               <meta charSet="UTF-8" />
               <meta name="keywords" content="HTML,CSS,XML,JavaScript" />
               <meta name="author" content="John Doe" />
               <link rel="shortcut icon" href="static/favicon.ico"></link>
               <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
               />
               <link
                  href="https://fonts.googleapis.com/css?family=Roboto"
                  rel="stylesheet"
               />
               {this.props.styleTags}
            </Head>
            <body>
               <GlobalStyle />
               <Main />
               <NextScript />
            </body>
         </html>
      );
   }
}
