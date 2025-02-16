import Filters from "../filters/page";
import styles from './bags.module.css'
import ProductCard from "../productCard/page";

const Bags = () => {
    return (
        <>
            <div className={styles.bags__wrap}>
                <div className={styles.bags__filters_section}>
                    <Filters />
                </div>
                <div className={styles.bags__section}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </>
    )
}

export default Bags;