import Head from 'next/head';
import Header from './header';
import Footer from './footer';

function Layout({children, title = '', description = 'GuitarLA, tienda de guitarras y blog de música', cartCount}) {
  return (
    <>
    <Head>
        <meta name="description" content={description}/>
        <title>{`GuitarLA - ${title}`}</title>
    </Head>
    
    <Header cartCount={cartCount}/>
    
    {children}
    
    <Footer />
    </>
  )
}

export default Layout