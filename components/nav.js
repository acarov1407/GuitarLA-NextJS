import Link from "next/link";
import { useRouter } from 'next/router';
import styles from '../styles/index/nav.module.css';

function Nav({cartCount}) {

    const location = useRouter();
    console.log(cartCount)
    return (
        <nav className={styles.nav}>
            <Link
                className={`${location.pathname === '/' ? styles.active : ''} ${styles.nav__link}`}
                href="/"
            >
                Inicio
            </Link>

            <Link
                className={`${location.pathname === '/about' ? styles.active : ''} ${styles.nav__link}`}
                href="/about"
            >
                Nosotros
            </Link>

            <Link
                className={`${location.pathname === '/shop' ? styles.active : ''} ${styles.nav__link}`}
                href="/shop"
            >
                Tienda
            </Link>

            <Link
                className={`${location.pathname === '/blog' ? styles.active : ''} ${styles.nav__link}`}
                href="/blog"
            >
                Blog
            </Link>

            <Link
                className={`${location.pathname === '/cart' ? styles["active-cart"] : ''} ${styles["nav__link-cart"]}`}
                href="/cart"

            >
                <div className={`${cartCount > 0 ? styles['counter-active'] : ''} ${styles.counter}`}>{cartCount}</div>
            </Link>




        </nav>
    )
}

export default Nav