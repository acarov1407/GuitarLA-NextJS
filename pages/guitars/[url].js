import {useState} from 'react';
import Alert from '../../components/alert';
import Layout from "../../components/layout";
import styles from '../../styles/guitars/guitars.module.css';
import Image from "next/image";


export default function Guitar({ data: guitar, addToCart, cartCount }) {

    const [error, setError] = useState(false);
    const [amount, setAmount] = useState(0);
    const { name, description, image, price } = guitar.data[0].attributes;

    function handleSubmit(e){
        e.preventDefault();
        if(amount <= 0){
            setError(true);
            return;
        }

        setError(false);

        const guitarLS = {
            id: guitar.data[0].id,
            name,
            description,
            image,
            price,
            amount
        }

        addToCart(guitarLS);
        
    }

    return (
        <Layout title={name} cartCount={cartCount}>
            <main className={styles.guitar}>
                <div className={`${styles.guitar__content} container`}>
                    <Image width={600} height={400} src={image.data.attributes.formats.medium.url} alt={`guitarra ${name}`} className={styles.guitar__img} />
                    <div className={styles.guitar__texts}>
                        <h2 className={styles.guitar__title}>{name}</h2>
                        <p className={styles.guitar__description}>
                            {description}
                        </p>
                        <p className={styles.guitar__price}>${price}</p>
                        <form className={styles.guitar__form} onSubmit={handleSubmit}>
                            <div className={styles.field}>
                                <label htmlFor="amount" className={styles["guitar__form-label"]}>Cantidad</label>
                                <select name="amount" id="amount"
                                    className={styles["guitar__form-select"]} 
                                    value={amount}
                                    onChange={(e) => setAmount(parseInt(e.target.value))}
                                    >
                                    <option value="0">-- Seleccione --</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <input type="submit" value="Agregar al carrito" className={styles["guitar__form-submit"]} />
                        </form>
                        {
                            error && <Alert msg="Debes seleccionar una cantidad v??lida!" setError={setError}/>
                        }
                        

                    </div>
                </div>
            </main>
        </Layout>

    )
}

export async function getStaticPaths() {
    const result = await fetch(`${process.env.API_URL}/guitars`);
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

//Forma Est??tica con Routing Dinamico
export async function getStaticProps({params: {url}}) {
    const result = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`);
    const data = await result.json();

    return {
        props: {
            data
        }
    }
}

//Forma Dinamica con Routing Dinamico
// export async function getServerSideProps({ query: { url } }) {
//     const result = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`);
//     const data = await result.json();


//     return {
//         props: {
//             data
//         }
//     }
// }