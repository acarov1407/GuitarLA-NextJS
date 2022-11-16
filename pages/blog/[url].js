import Layout from "../../components/layout"
import { formatDate } from '../../utils/helpers';
import Image from 'next/image';
import styles from "../../styles/blog/blogCard.module.css";

export default function Blog({ data: blog }) {


  const { title, content, publishedAt, image } = blog.data[0].attributes;

  return (
    <Layout title={title}>
      <main className={styles.blogEntry}>
        <article className={`${styles.blogCard} ${styles["blogCard--entry-view"]}`}>
          <Image width={600} height={400} 
          src={image.data.attributes.url} 
          alt={`imagen blog ${title}`} 
          className={styles.blogCard__img} 
          priority="true"/>
          <div className={styles.blogCard__texts}>
            <h3 className={styles.blogCard__title}>{title}</h3>
            <p className={styles.blogCard__date}>{formatDate(publishedAt)}</p>
            <p className={`${styles.blogCard__content} ${styles["blogCard__content--entry-view"]}`}>{content}</p>
          </div>
        </article>
      </main>

    </Layout>
  )
}

export async function getStaticPaths() {
  const result = await fetch(`${process.env.API_URL}/posts`);
  const data = await result.json();

  const paths = data.data.map(guitar => ({
      params: {
          url: guitar.attributes.url
      }
  }))
  
  return {
      paths,
      fallback: false
  }
}

//Forma Estática con Routing Dinamico
export async function getStaticProps({params: {url}}) {
  const result = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`);
  const data = await result.json();

  return {
      props: {
          data
      }
  }
}

