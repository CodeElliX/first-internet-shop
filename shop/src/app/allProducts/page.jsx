"use client"
import styles from './products.module.css';
import Filters from '../filters/page';
// import ProductCard from '../product-card/page';


const AllProducts = () => {

    return (
        <div className={styles.products}>
            <div className={styles.products__filters_section}>
                <Filters />
            </div>
            <div className={styles.products__bags_section}>
                
                {/* <ProductCard />
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
                <ProductCard /> */}
            </div>
        </div>
    )
}

export default AllProducts;