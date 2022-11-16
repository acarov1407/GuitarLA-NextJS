import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/shop/shop.module.css';

export default function Guitar({guitar}) {

  const {name, description, image, price, url} = guitar;
  return (
    <div className={styles.guitar}>
            <Image width={600} height={400} className={styles.guitar__img} src={image.data.attributes.formats.small.url} alt={`imagen guitarra ${name}`} />
            <div className={styles.guitar__texts}>
                <h3 className={styles.guitar__title}>{name}</h3>
                <p className={styles.guitar__description}>{description}</p>
                <p className={styles.guitar__price}>${price}</p>
                <Link className={styles.guitar__cta} href={`/guitars/${url}`}>
                    Ver producto
                </Link>
            </div>
        </div>
  )
}
