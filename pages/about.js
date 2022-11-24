import Layout from "../components/layout"
import Image from "next/image";
import styles from '../styles/about/about.module.css';

function About({cartCount}) {
    return (
        <Layout title="Nosotros" description="GuitarLA, Sobre Nosotros, tienda de guitarras y blog de música" cartCount={cartCount}>
            <main className={styles.about}>
                <h2 className={styles.about__heading}>Nosotros</h2>
                <div className={styles.about__content}>
                    <Image width={1000} height={800} src="/img/nosotros.jpg" alt="imagen nosotros" className={styles.about__img} />
                    <div className={styles.about__texts}>
                        <p className={styles.about__paragraph}>
                            Curabitur dapibus eros a consequat scelerisque. Cras in purus et est euismod luctus sit amet at lorem.
                            In hac habitasse platea dictumst. Quisque vel massa id justo mollis euismod sit amet vel nisl.
                            Phasellus sit amet metus interdum, mattis arcu in, pulvinar leo. Aenean tristique eros nec neque vestibulum tincidunt.
                            Mauris tincidunt non mi nec semper.
                        </p>
                        <p className={styles.about__paragraph}>
                            Nullam id est eu mauris porttitor suscipit a et tortor. In vitae consectetur lacus.
                            Quisque a venenatis quam. Ut lacinia sollicitudin eros. Pellentesque feugiat sapien non convallis dictum.
                            Ut consectetur, libero quis gravida ullamcorper, elit tellus malesuada nunc, id eleifend ipsum turpis et ante.
                        </p>
                    </div>

                </div>
            </main>
        </Layout>

    )
}

export default About