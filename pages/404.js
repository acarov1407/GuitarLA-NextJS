import Layout from '../components/layout';
import Link from 'next/link';

export default function Page404() {
  return (
    <Layout title="Página No Encontrada">
       <p className='error'>Página No Encontrada</p>
       <Link className="error__link" href="/">Ir a Inicio</Link>
    </Layout>
  )
}
