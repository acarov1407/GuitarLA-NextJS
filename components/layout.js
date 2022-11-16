import Head from 'next/head';
import Header from './header';
import Footer from './footer';

function Layout({children, title = '', description = ''}) {
  return (
    <>
    <Head>
        <meta name="description" content={description}/>
        <title>{`GuitarLA - ${title}`}</title>
    </Head>
    
    <Header />
    
    {children}
    
    <Footer />
    </>
  )
}

export default Layout