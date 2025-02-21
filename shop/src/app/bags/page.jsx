"use client"
import { useEffect } from "react";
import Filters from "../../../components/filters/page";
import styles from './bags.module.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchBags, selectBagsData } from "../redux/productsSlice";
import ProductCard from "../product-card/page";

const Bags = () => {

    const bagsItems = useSelector(selectBagsData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBags())
    }, [])

    return (
        <>
            <div className={styles.bags__wrap}>
                <div className={styles.bags__filters_section}>
                    {/* <Filters /> */}
                </div>
                <div className={styles.bags__section}>
                  {bagsItems.map((obj) => {
                    return (
                        <ProductCard key={obj.id} {...obj} from="bags" />
                    )
                  })}
                </div>
            </div>
        </>
    )
}

export default Bags;