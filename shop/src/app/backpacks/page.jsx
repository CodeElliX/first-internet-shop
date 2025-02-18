"use client"
import styles from './backpacks.module.css';
import Filters from '../filters/page';
import ProductCard from '../product-card/page';
import { useEffect } from 'react';
import { fetchBackpacks, selectBackpackData } from '../redux/backpacksSlice';
import { useDispatch, useSelector } from 'react-redux';

const Backpacks = () => {

    const dispatch = useDispatch();
    const backpacksItems = useSelector(selectBackpackData);

    useEffect(() => {
        dispatch(fetchBackpacks());
    }, [])

    return (
        <>
            <div className={styles.backpacks_wrap}>
                <div className={styles.backpacks__filters_section}>
                    <Filters />
                </div>
                <div className={styles.backpacks__bags_section}>
                    {backpacksItems?.map((obj) => {
                        return <ProductCard key={obj.id} {...obj} from="backpacks" />
                    })}
                </div>
            </div>
        </>
    )
}

export default Backpacks;