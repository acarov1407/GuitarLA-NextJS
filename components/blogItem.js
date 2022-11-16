import {formatDate} from "../utils/helpers";
import Link from "next/link";
import Image from 'next/image'
import styles from "../styles/blog/blogCard.module.css";


export default function BlogItem({blog}) {

    const {title, content, publishedAt, image, url} = blog;
  return (
    <article className={`${styles.blogCard} ${styles["blogCard--card-view"]}`}>
            <Image width={600} height={400} src={image.data.attributes.formats.small.url} alt={`imagen blog ${title}`} className={styles.blogCard__img} />
            <div className={styles.blogCard__texts}>
                <h3 className={styles.blogCard__title}>{title}</h3>
                <p className={styles.blogCard__date}>{formatDate(publishedAt)}</p>
                <p className={`${styles.blogCard__content} ${styles["blogCard__content--card-view"]}`}>{content}</p>
                <Link className={styles.blogCard__cta} href={`/blog/${url}`}>Leer Post</Link>
            </div>
        </article>
  )
}
