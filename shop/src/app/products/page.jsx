"use client"
import styles from './products.module.css';
import Bags from '../bags/page';
import Filters from '../filters/page';

const Products = () => {
    return (
        <div className={styles.products}>
        <div className={styles.products__filters_section}>
            <Filters />
        </div>
          <div className={styles.products__bags_section}>
            <Bags/>
            <Bags/>
            <Bags/>
            <Bags/>
            <Bags/>
            <Bags/>
            <Bags/>
            <Bags/>
            <Bags/>
            <Bags/>
            <Bags/>
            </div>
        </div>
    )
}

export default Products;