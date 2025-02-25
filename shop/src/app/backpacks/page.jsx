"use client"
import styles from './backpacks.module.css';
import Filters from '../../../components/filters/page';
import ProductCard from '../product-card/page';
import { useEffect } from 'react';
import { fetchBackpacks, selectBackpackData } from '../redux/productsSlice';
import { selectValue, resetFilters } from '../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';

const Backpacks = () => {

    const dispatch = useDispatch();
    const backpacksItems = useSelector(selectBackpackData);
    const searchValue = useSelector(selectValue);
    const activeFilters = useSelector(state => state.filter);
    const pathname = usePathname();

    const filteredBackpacks = backpacksItems.filter((obj) => {
        const categoryMatch = activeFilters.category.length === 0 || activeFilters.category.includes(obj.category);
        const seriesMatch = activeFilters.series.length === 0 || activeFilters.series.includes(obj.series);
        const compartmentsMatch = activeFilters.compartments.length === 0 || activeFilters.compartments.includes(Number(obj.compartments));
        const searchMatch = obj.name.toLowerCase().includes(searchValue.toLowerCase());
        const colorMatch = activeFilters.colours.length === 0 || activeFilters.colours.includes(obj.color);
        const genderMatch = activeFilters.gender.length === 0 || activeFilters.gender.includes(obj.gender);
        const structures = activeFilters.structures.length === 0 || activeFilters.structures.includes(obj.structure);
        return categoryMatch && seriesMatch && compartmentsMatch && searchMatch && colorMatch && genderMatch && structures;
    });


    useEffect(() => {
        dispatch(fetchBackpacks());
    }, [dispatch])

    useEffect(() => {
        dispatch(resetFilters());
    }, [dispatch])

    return (
        <>
            <div className={styles.backpacks_wrap}>
                <div>
            {pathname === "/backpacks/" && <Filters from="backpacks" backpacksItems={backpacksItems} />}
                </div>
                <div className={styles.backpacks__bags_section}>
                    {filteredBackpacks.map((obj) => {
                        return (
                            <ProductCard key={obj.id} {...obj} from="backpacks" />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Backpacks;