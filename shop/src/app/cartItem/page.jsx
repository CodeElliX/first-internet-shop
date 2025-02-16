"use client"
import Image from 'next/image';
import bag from '../../../public/bag_img.webp';
import { useState } from 'react';
import styles from './cartItem.module.css'

const CartItem = () => {
    let [count, setCount] = useState(1);
    const onClickMinus = () => {
        setCount(count -= 1)
    }

    const onClickPlus = () => {
        setCount(count += 1)
    }
    const onClickRemove = () => {
        setCount(count = 1)
    }
    return (
        <>
            <div className={styles.cart_item}>
                <div >
                    <Image src={bag} alt="bag" className={styles.cart_item__img} />
                </div>
                <div className={styles.cart_item__info}>
                    <h3>Рюкзак жіночий</h3>
                    <p>артикль: 2345</p>
                </div>
                <div className={styles.cart_item__count}>

                    <button onClick={onClickMinus} disabled={count === 1} className={styles.cart_item__count_minus}>
                        <svg width="42" height="42" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="128" cy="128" fill="transparent" r="96" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
                            <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" x1="88" x2="168" y1="128" y2="128" />
                        </svg>
                    </button>

                    <b>{count}</b>

                    <button onClick={onClickPlus} className={styles.cart_item__count_plus}>
                        <svg width="42" height="42" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="128" cy="128" fill="transparent" r="96" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
                            <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" x1="88" x2="168" y1="128" y2="128" />
                            <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" x1="128" x2="128" y1="88" y2="168" />
                        </svg>
                    </button>

                </div>
                <div className={styles.cart_item__price}>
                    <b>{500 * count}₴</b>
                </div>

                <div className={styles.cart_item__remove}>
                    <div onClick={onClickRemove} className={styles.cart_item__remove_item}>
                        <svg width="42" height="42" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="128" cy="128" fill="transparent" r="96" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
                            <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" x1="88" x2="168" y1="128" y2="128" />
                            <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" x1="128" x2="128" y1="88" y2="168" />
                        </svg>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CartItem;