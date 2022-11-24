import Link from "next/link";
import Nav from "./nav";
import Image from "next/image";
import styles from '../styles/index/header.module.css';

function Header({cartCount}) {
  return (
    <header className={styles.header}>
            <div className={`${styles.header__content} container`}>
                <div className={styles.header__logo}>
                    <Link href="/">
                        <Image width={300} height={40} src="/img/logo.svg" alt="logo Guitar LA" className={styles.header__logoimg} />
                    </Link>
                </div>
                <Nav cartCount={cartCount}/>
            </div>
        </header>
  )
}

export default Header