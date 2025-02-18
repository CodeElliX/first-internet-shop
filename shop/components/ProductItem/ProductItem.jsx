"use client";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import axios from 'axios';
import styles from './productItem.module.css';
import Slider from '../slider/page';

const ProductItem = () => {
    const [product, setProduct] = useState(null);
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const from = searchParams.get("from");

    useEffect(() => {
        if (id && from) {
            async function fetchData() {
                const dataFile = from === "backpacks" ? "/backpackData.json" : "bagsData.json"
                const { data } = await axios.get(dataFile)
                const productData = data.find(item => item.id === Number(id));
                setProduct(productData);
                return productData;
            }
            fetchData();
        }
    }, [id, from]);

    const productImg = [
        "/bag_img.webp",
        "/bag2.webp",
        "/bag3.webp",
        "/bag4.webp",
        "/bag5.webp",
        "/bag6.webp"
    ];

    if (!product) return <div>Загрузка...</div>;

    return (
        <div className={styles.productItem_wrap}>
            <section className={styles.productItem_section1}>
                <Slider productImg={productImg} />
            </section>
            <section className={styles.productItem_section2}>
                <h4 className={styles.productItem__tittle}>Рюкзак жіночий</h4>
                <span className={styles.productItem__availability_status}>В наявності</span>
                <span className={styles.productItem__price}>600грн</span>
                <button className={styles.productItem__count_button}><span>-</span><span>1</span><span>+</span></button>
                <button className={styles.productItem__add_product_button}>Додати до кошика</button>
                <div className={styles.productItem__description}>
                    <div className={styles.list_item}><span className={styles.key}>Материал</span><span className={styles.value}>Канва</span></div>
                    <div className={styles.list_item}><span className={styles.key}>Розмір, см</span><span className={styles.value}>38x36x7</span></div>
                    <div className={styles.list_item}><span className={styles.key}>Вага, г</span><span className={styles.value}>316</span></div>
                    <div className={styles.list_item}><span className={styles.key}>Об'єм, л</span><span className={styles.value}>9</span></div>
                    <div className={styles.list_item}><span className={styles.key}>Група товарів</span><span className={styles.value}>Сумки-шопери</span></div>
                </div>
            </section>
        </div>
    );
};

export default dynamic(() => Promise.resolve(ProductItem), { ssr: false });
