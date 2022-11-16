import Layout from "../components/layout"
import Guitar from "../components/guitar"
import styles from "../styles/shop/shop.module.css";

export default function Shop({ data: guitars }) {

    return (

        <Layout title="Tienda Virtual" description="Tienda Virtual, GuitarLA, tienda de guitarras">
            <main className={styles.shop}>
                <h2 className={styles.shop__heading}>Nuestra Colección</h2>
                <div className={styles.shop__content}>
                    {
                        guitars?.data.length && (
                            guitars?.data.map(guitar => (
                                <Guitar
                                    key={guitar.id}
                                    guitar={guitar.attributes}
                                />
                            ))
                        )

                    }
                </div>
            </main>
        </Layout>

    )
}

//***Forma Estática 
//(los datos de la API solo cambian en el proyecto cada vez que hace un build)
// export async function getStaticProps(){
//     const result = await fetch(`${process.env.API_URL}/guitars?populate=image`);
//     const data = await result.json();


//     return {
//         props: {
//             data
//         }
//     }
// }

//***Forma Dinamica */
//Los datos cambian siempre que la API cambie los datos, sin embargo esto hace que 
//cada vez que se consulte la pagina web se haga un request a la API
export async function getServerSideProps() {
    const result = await fetch(`${process.env.API_URL}/guitars?populate=image`);
    const data = await result.json();


    return {
        props: {
            data
        }
    }
}
