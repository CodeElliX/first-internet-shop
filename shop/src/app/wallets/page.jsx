"use client"
import styles from './wallets.module.css';
import Filters from '../../../components/filters/page';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWallets, selectWalletsData } from '../redux/productsSlice';
import ProductCard from '../product-card/page';
import { selectValue, resetFilters } from '../redux/filterSlice';
import { usePathname } from 'next/navigation';


const Wallets = () => {
    const searchValue = useSelector(selectValue);
    const dispatch = useDispatch();
    const walletsItems = useSelector(selectWalletsData);
    const activeFilters = useSelector(state => state.filter)
    const pathname = usePathname();

    const filteredWallets = walletsItems.filter((obj) => {
        const categoryMatch = activeFilters.category.length === 0 || activeFilters.category.includes(obj.category);
        const seriesMatch = activeFilters.series.length === 0 || activeFilters.series.includes(obj.series);
        const compartmentsMatch = activeFilters.compartments.length === 0 || activeFilters.compartments.includes(Number(obj.compartments));
        const searchMatch = obj.name.toLowerCase().includes(searchValue.toLowerCase());
        const colorMatch = activeFilters.colours.length === 0 || activeFilters.colours.includes(obj.color);
        const genderMatch = activeFilters.gender.length === 0 || activeFilters.gender.includes(obj.gender);
        return categoryMatch && seriesMatch && compartmentsMatch && searchMatch && colorMatch && genderMatch;
    });

    useEffect(() => {
        dispatch(fetchWallets());
    }, [dispatch])

    useEffect(() => {
        dispatch(resetFilters());
    }, [dispatch])

    return (
        <>
            <div className={styles.wallets__wrap}>
                <div className={styles.wallets__filters_section}>
                  {pathname === "/wallets/" && <Filters from="wallets" walletsItems={walletsItems} />}  
                </div>
                <div className={styles.wallets__section}>
                    {filteredWallets.map((obj) => {
                        return (
                            <ProductCard key={obj.id} {...obj} from="wallets" />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Wallets;