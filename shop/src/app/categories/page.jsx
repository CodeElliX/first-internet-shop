import styles from './categories.module.css';

const Categories = () => {
    return(
        <div className={styles.categories}>
          <ul className={styles.category__sections}>
            <li>Усі товари</li>
            <li>Рюкзаки</li>
            <li>Сумки</li>
            <li>Гаманці</li>
            <li>Косметички</li>
          </ul>
        </div>
    )
}

export default Categories;