import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer_wrap}>
            <section className={styles.information}>
                <h4>Інформація</h4>
                Знижки
                Контакти
                Гарантія
                Оплата і доставка
                Повернення
                Корпоративні та оптові замовлення
                Програма лояльності
                Договір публічної оферти
            </section>
        </div>
    )
}

export default Footer;