import Layout from "../components/layout";
import BlogItem from "../components/blogItem";
import styles from "../styles/blog/blog.module.css";


export default function Blog({ data }) {
    const { data: blogs } = data;

    return (
        <Layout title="Blog" description="Blog, GuitarLA, blog de música">
            <main className={styles.blog}>
                <h2 className={styles.blog__heading}>Blog</h2>
                <div className={styles.blog__content}>
                    {
                        blogs?.map(blog => (
                            <BlogItem
                                key={blog.id}
                                blog={blog.attributes}
                            />
                        ))
                    }
                </div>

            </main>
        </Layout>
    )
}

export async function getServerSideProps() {
    const result = await fetch(`${process.env.API_URL}/posts?populate=image`);
    const data = await result.json();

    return {
        props: {
            data
        }
    }
}