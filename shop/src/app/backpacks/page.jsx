import styles from './backpacks.module.css';
import Filters from '../filters/page';
import ProductCard from '../productCard/page';

const Backpacks = () => {
    return (
        <>
        <div className={styles.backpacks_wrap}>
        <div className={styles.backpacks__filters_section}>
            <Filters />
        </div>
          <div className={styles.backpacks__bags_section}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            </div>
        </div>
        </>
    )
}

export default Backpacks;