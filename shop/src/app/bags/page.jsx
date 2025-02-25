"use client"
import { useEffect } from "react";
import Filters from "../../../components/filters/page";
import styles from './bags.module.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchBags, selectBagsData } from "../redux/productsSlice";
import ProductCard from "../product-card/page";
import { selectValue, resetFilters } from '../redux/filterSlice';
import { usePathname } from "next/navigation";


const Bags = () => {
    const searchValue = useSelector(selectValue);
    const bagsItems = useSelector(selectBagsData)
    const dispatch = useDispatch();
    const activeFilters = useSelector(state => state.filter);
    const pathname = usePathname();

    const filteredBags = bagsItems.filter((obj) => {
        const categoryMatch = activeFilters.category.length === 0 || activeFilters.category.includes(obj.category);
        const seriesMatch = activeFilters.series.length === 0 || activeFilters.series.includes(obj.series);
        const compartmentsMatch = activeFilters.compartments.length === 0 || activeFilters.compartments.includes(Number(obj.compartments));
        const searchMatch = obj.name.toLowerCase().includes(searchValue.toLowerCase());
        const colorMatch = activeFilters.colours.length === 0 || activeFilters.colours.includes(obj.color);
        const genderMatch = activeFilters.gender.length === 0 || activeFilters.gender.includes(obj.gender);
        return categoryMatch && seriesMatch && compartmentsMatch && searchMatch && colorMatch && genderMatch;
    });

    useEffect(() => {
        dispatch(fetchBags());
    }, [dispatch])

    useEffect(() => {
        dispatch(resetFilters());
    }, [dispatch])

    return (
        <>
            <div className={styles.bags__wrap}>
                <div className={styles.bags__filters_section}>
                    {pathname === "/bags/" && <Filters from="bags" bagsItems={bagsItems} />}
                </div>
                <div className={styles.bags__section}>
                    {filteredBags
                        .map((obj) => {
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