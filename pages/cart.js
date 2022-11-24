import {useState, useEffect} from 'react';
import Layout from '../components/layout';
import Image from 'next/image';
import styles from '../styles/cart/cart.module.css'; 

export default function Cart({cart, updateAmount, deleteFromCart}) {
    const [total, setTotal] = useState(0);

    useEffect(() =>{
        const calculatedTotal = cart.reduce((_total, _item) => _total + (_item.amount * _item.price), 0);
        setTotal(calculatedTotal);
    }, [cart]);
  return (
    <Layout title="Mi Carrito" description='GuitarLA, Carrito de Compras' cartCount={cart.length}>
        <main className={styles.cart}>
                <h1 className={styles.cart__heading}>Carrito de Compras</h1>
                <div className={styles.cart__content}>

                    <div className={styles.articles}>
                        <h2 className={styles.articles__title}>Articulos</h2>
                        {
                            cart?.length === 0 ? 'Carrito Vacío' : (
                                cart?.map(item => (
                                    <div key={item.id} className={styles.product}>
                                        <div className={styles.product__content}>
                                            <div>
                                                <Image width={600} height={400} className={styles.product__img} src={item.image.data.attributes.formats.medium.url} alt={`imagen guitarra ${item.name}`} />
                                            </div>

                                            <div>
                                                <p className={styles.product__name}>{item.name}</p>
                                                <label htmlFor="product-amount" className={styles.product__amount}>Cantidad:</label>
                                                <select name="product-amount" id="product-amount"
                                                    value={item.amount} 
                                                    onChange={(e) => updateAmount(item.id, parseInt(e.target.value))}
                                                    className={styles["product__amount-select"]}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                                <p className={styles.product__price}>$ <span>{item.price}</span></p>
                                                <p className={styles.product__subtotal}>Subtotal: $ <span>{item.amount*item.price}</span></p>
                                            </div>
                                        </div>
                                        <button type="button" className={styles.product__closebtn} onClick={() => deleteFromCart(item.id)}>X</button>
                                    </div>
                                ))
                            )
                        }
                    </div>
                    <aside className={styles.summary}>
                        <h3 className={styles.summary__title}>Resumen del Pedido</h3>
                        <p className={styles.summary__total}>Total a pagar: $ <span>{total}</span></p>
                    </aside>
                </div>


            </main>
    </Layout>
  )
}
