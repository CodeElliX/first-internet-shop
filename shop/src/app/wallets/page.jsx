"use client"
import styles from './wallets.module.css';
import Filters from '../../../components/filters/page';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWallets, selectWalletsData } from '../redux/productsSlice';
import ProductCard from '../product-card/page';

const Wallets = () => {

    const dispatch = useDispatch();
    const walletsItems = useSelector(selectWalletsData);

    useEffect(() => {
        dispatch(fetchWallets())
    }, [])

    return (
        <>
            <div className={styles.wallets__wrap}>
                <div className={styles.wallets__filters_section}>
                <Filters from="wallets" walletsItems={walletsItems}/>
                </div>
                <div className={styles.wallets__section}>
                    {walletsItems.map((obj) => {
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