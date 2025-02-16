"use client"
const { useState } = require("react")
import styles from './productCard.module.css';
import Image from 'next/image';
import bagIcon from '../../../public/bag_img.webp';
import { useRouter } from 'next/navigation';
import Link from 'next/link'


const ProductCard = () => {
    const [clikedSvg, setClickSvg] = useState(false);
    const router = useRouter();
    const onClickEmptySvg = () => {
        setClickSvg(!clikedSvg);
    }

    const onClickFullSvg = () => {
        router.push('/cart');
    }

    return (
        <div className={styles.bags__card}>

            <div className={styles.card}>
                <Link href="/productItem" className={styles.link}>
                    <Image src={bagIcon} alt="icon" className={styles.product} />
                    <h4>Рюкзак жіночий</h4>
                </Link>
                <span><b>Ціна:</b> 600грн</span>
                {!clikedSvg ?
                    <svg onClick={onClickEmptySvg} data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title />
                        <path d="M5.53,5,5,3H1.25a1,1,0,0,0,0,2H3.47L6.7,18H20V16H8.26l-.33-1.34L21,12.17V5ZM19,10.52,7.45,12.71,6,7H19ZM7,19a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,7,19Zm12,0a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,19,19Z" />
                    </svg>
                    :
                    <svg onClick={onClickFullSvg} className={styles.svg_by} data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title /><path d="M12.2,9h1.6V6.8H16V5.2H13.8V3H12.2V5.2H10V6.8h2.2ZM20,5v5.5L7.45,12.72,5,3H1.25a1,1,0,0,0,0,2H3.47L6.7,18H20V16H8.26l-.33-1.33L22,12.18V5ZM7,19a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,7,19Zm12,0a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,19,19Z" /></svg>
                }
            </div>
        </div>
    )
}

export default ProductCard;