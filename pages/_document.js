import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    const sheet = new ServerStyleSheet();

    // Run the React rendering logic synchronously
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <title style={{ fontSize: "5px" }}>hasan</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          {/* <meta style={{ fontSize: "5px" }} name="title" content="Manifolt - Araç Tamir Servislerinin Uygulaması"></meta> */}
          <meta style={{ fontSize: "5px" }} name="title" content="Hasan ABİ"></meta>

          <meta name="keywords" content="Manifolt, servis uygulaması, araç bakım uygualaması, tamirci uygulaması, sanayici uygulaması" />
          {/* <meta name="description" content="Manifolt - Araç Tamir Servislerinin Uygulaması" /> */}
          <meta name="description" content="hasan abi" />

          <meta name="author" content="softalya.com" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="apple-itunes-app" content="app-id=1529432227" />
          <meta name="google-play-app" content="app-id=com.manifolt.v2" />
          {/* <meta property="og:type" content="website" />
          <meta property="og:url" content="https://manifolt.com" />
          <meta property="og:title" content="Manifolt - Araç Tamir Servislerinin Uygulaması" />
          <meta property="og:description" content="Manifolt, servis uygulaması, araç bakım uygualaması, tamirci uygulaması, sanayici uygulaması" />
          <meta property="og:image" content="images/about-us.jpg" />
          <link rel="stylesheet" type="text/css" href="/css/doc.css" /> */}
          {/* <!-- Favicon --> */}
          <link rel="shortcut icon" href="images/favicon.ico" />
          {/* <!-- Google Fonts --> */}
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&amp;Raleway:300,400,500,600,700,800,900" />
          {/* <!-- Bootstrap --> */}
          <link rel="stylesheet" href="css/bootstrap.min.css" />
          {/* <!-- owl-carousel --> */}
          <link rel="stylesheet" type="text/css" href="css/owl-carousel/owl.carousel.css" />
          {/* <!-- Font Awesome --> */}
          <link rel="stylesheet" type="text/css" href="css/font-awesome.css" />
          {/* <!-- Magnific Popup --> */}
          {/* <link rel="stylesheet" type="text/css" href="css/magnific-popup/magnific-popup.css" /> */}
          {/* <!-- Animate --> */}
          <link rel="stylesheet" type="text/css" href="css/animate.css" />
          {/* <!-- Ionicons --> */}
          <link rel="stylesheet" href="css/ionicons.min.css" />
          {/* <!-- Style --> */}
          <link rel="stylesheet" href="css/style.css" />
          {/* <!-- Responsive --> */}
          <link rel="stylesheet" href="css/responsive.css" />
          {/* <!-- Style customizer (Remove these two lines please) --> */}
          {/* <link rel="stylesheet" href="javascript:void(0)" data-style="styles" />
          <link rel="stylesheet" href="css/style-customizer.css" /> */}
          {/* <!-- custom style --> */}
          <link rel="stylesheet" href="css/custom.css" />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* <!-- jQuery --> */}
          {/* <script async src="jquery-3.5.1.js"></script> */}
          {/* <script async type="text/javascript" src="js/jquery.min.js"></script> */}
          <script
            async
            src="https://code.jquery.com/jquery-3.6.0.js"
            integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
            crossOrigin="anonymous"
          ></script>

          {/* <!-- bootstrap --> */}
          <script async type="text/javascript" src="js/jquery.appear.js"></script>
          <script async type="text/javascript" src="js/counter/jquery.countTo.js"></script>
          <script async type="text/javascript" src="js/magnific-popup/jquery.magnific-popup.min.js"></script>
          <script async type="text/javascript" src="js/jquery.countdown.min.js"></script>
          <script async type="text/javascript" src="js/bootstrap.min.js"></script>
          <script async src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
          {/* <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script> */}
          {/* <script async type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script> */}
          {/* <!-- owl-carousel --> */}
          {/* <script async type="text/javascript" src="https://cdn.boomcdn.com/libs/owl-carousel/2.3.4/owl.carousel.min.js"></script> */}

          {/* <!-- Counter --> */}

          {/* <!-- Jquery Appear --> */}

          {/* <!-- Magnific Popup -->  */}

          {/* <!-- Retina --> */}
          {/* <script async type="text/javascript" src="js/retina.min.js"></script> */}

          {/* <!-- wow --> */}
          {/* <script async type="text/javascript" src="js/wow.min.js"></script> */}

          {/* <!-- Countdown --> */}

          {/* <!-- Custom --> */}
          <script async type="text/javascript" src="js/custom.js"></script>

          {/* <!-- Style Customizer -->  */}
          {/* <script async type="text/javascript" src="js/style-customizer.js"></script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
