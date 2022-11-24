import Layout from "../components/layout"
import Guitar from "../components/guitar";
import Course from "../components/course";
import BlogItem from "../components/blogItem";
import stylesShop from "../styles/shop/shop.module.css";
import stylesBlog from "../styles/blog/blog.module.css";

export default function Home({ guitars, course, blogs, cartCount }) {
  console.log(cartCount)
  return (
    <>
      <Layout title="Inicio" description="GuitarLA, tienda de guitarras y blog de música" cartCount={cartCount}>
        <main className={stylesShop.shop}>
          <h2 className={stylesShop.shop__heading}>Nuestra Colección</h2>
          <div className={stylesShop.shop__content}>
            {
              guitars?.length && (
                guitars?.map(guitar => (
                  <Guitar
                    key={guitar.id}
                    guitar={guitar.attributes}
                  />
                ))
              )

            }
          </div>
        </main>

        <Course course={course}/>
        
        <section className={stylesBlog.blog}>
          <h2 className={stylesBlog.blog__heading}>Blog</h2>
          <div className={stylesBlog.blog__content}>
            {
              blogs.map(blog => (
                <BlogItem
                  key={blog.id}
                  blog={blog.attributes}
                />
              ))
            }
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const guitarsURL = `${process.env.API_URL}/guitars?populate=image`;
  const blogsURL = `${process.env.API_URL}/posts?populate=image`;
  const courseURL = `${process.env.API_URL}/course?populate=image`;

  const [resGuitars, resCourse, resBlogs] = await Promise.all([
    fetch(guitarsURL),
    fetch(courseURL),
    fetch(blogsURL)
  ]);

  const [{ data: guitars }, {data: course}, { data: blogs }] = await Promise.all([
    resGuitars.json(),
    resCourse.json(),
    resBlogs.json()
  ])

  return {
    props: {
      guitars,
      course,
      blogs
    }
  }
}