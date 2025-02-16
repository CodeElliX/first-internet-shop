import styles from './filters.module.css';
import FiltersItems from '../filtersItems/page';
const Filters = () => {
    return (
        <aside className={styles.filter__wrap}>
            <FiltersItems />
        </aside>
    )
}

export default Filters;