import styles from './productItem.module.css';
import bagIcon from '../../../public/bag_img.webp';
import bag2 from '../../../public/bag2.webp';
import bag3 from '../../../public/bag3.webp';
import bag4 from '../../../public/bag4.webp';
import bag5 from '../../../public/bag5.webp';
import bag6 from '../../../public/bag6.webp';

import Slider from '../slider/page'

const ProductItem = () => {

    //передать массив с картинками
    const productImg = [bagIcon, bag2, bag3, bag4, bag5, bag6, bagIcon, bag2];
    return (
        <div className={styles.productItem_wrap}>
            <section className={styles.productItem_section1}>
                <Slider productImg={productImg}/>
            </section>
            <section className={styles.productItem_section2}>
                <h4 className={styles.productItem__tittle}>Рюкзак жіночий</h4>
                <span className={styles.productItem__availability_status}>В наявності</span>
                <span className={styles.productItem__price}>600грн</span>
                <button className={styles.productItem__count_button}><span>-</span><span>1</span><span>+</span></button>
                <button className={styles.productItem__add_product_button}>Додати до кошика</button>
                    <div className={styles.productItem__description}>
                        <div className={styles.list_item}>
                            <span className={styles.key}>Материіал</span>
                            <span className={styles.value}>Канва</span>
                        </div>
                        <div className={styles.list_item}>
                            <span className={styles.key}>Розмір, см</span>
                            <span className={styles.value}>38x36x7</span>
                        </div>
                        <div className={styles.list_item}>
                            <span className={styles.key}>Вага, г</span>
                            <span className={styles.value}>316</span>
                        </div>
                        <div className={styles.list_item}>
                            <span className={styles.key}>Об'ем, л</span>
                            <span className={styles.value}>9</span>
                        </div>
                        <div className={styles.list_item}>
                            <span className={styles.key}>Група товарів</span>
                            <span className={styles.value}>Сумки-шопери</span>
                        </div>
                        <div className={styles.list_item}>
                            <span className={styles.key}>Ліцензія/серія</span>
                            <span className={styles.value}>KITE</span>
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default ProductItem;