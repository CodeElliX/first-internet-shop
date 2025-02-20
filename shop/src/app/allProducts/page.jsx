"use client"
import styles from './products.module.css';
import Filters from '../../../components/filters/page';
import Backpacks from '../backpacks/page';
import Bags from '../bags/page';
import Wallets from '../wallets/page';
// import ProductCard from '../product-card/page';


const AllProducts = () => {

    return (
        <div className={styles.products}>
            <div className={styles.products__filters_section}>
                <Filters />
            </div>
            <div className={styles.products__bags_section}>
            <Backpacks />
            <Bags />
            <Wallets />
            </div>
        </div>
    )
}

export default AllProducts;