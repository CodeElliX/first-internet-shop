import { Cart } from "../../src/app/Cart/page";
import { Search } from "../../src/app/Search/page";
import styles from "./header.module.css"

 const Header = () => {
    return <div className={styles.header}>
    <span>bags shop</span>
     <Search />
     <Cart />
    </div>
}

export default Header;