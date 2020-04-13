import Head from "next/head";
import { Container } from "semantic-ui-react";
import Header from "./Header";
import HeadContent from "./HeadContent";


function Layout({ children }) {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link rel="stylesheet" type="text/css" href="/static/styles.css" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap&subset=cyrillic,cyrillic-ext" rel="stylesheet"/>
        <title>All Hotels ua</title>
      </Head>
      <Header />
        {children}
      
    </>
  );
}

export default Layout;
