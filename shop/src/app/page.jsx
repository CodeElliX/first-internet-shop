"use client"
import "./globals.css";
import Filters from "../../components/filters/page";
import { useDispatch, useSelector } from "react-redux";
import { selectBackpackData, selectBagsData, selectWalletsData } from "./redux/productsSlice";
import ProductCard from "./product-card/page";
import { useEffect } from "react";
import { fetchBackpacks, fetchBags, fetchWallets } from './redux/productsSlice'
import { preRenderFiltersHomePage } from "./utils/preRenderFilters";
import { selectValue, resetFilters } from "./redux/filterSlice";


export default function Home() {

  const backpacks = useSelector(selectBackpackData);
  const bags = useSelector(selectBagsData);
  const wallets = useSelector(selectWalletsData);
  const dispatch = useDispatch()

  const searchValue = useSelector(selectValue);
  const activeFilters = useSelector(state => state.filter);


  const itemsBackpacks = preRenderFiltersHomePage(searchValue, backpacks, activeFilters);
  const itemsBags = preRenderFiltersHomePage(searchValue, bags, activeFilters);
  const itemsWallets = preRenderFiltersHomePage(searchValue, wallets, activeFilters);

  useEffect(() => {
    dispatch(fetchBackpacks());
    dispatch(fetchBags());
    dispatch(fetchWallets());
    dispatch(resetFilters());
  }, [])

  return (
    <div className="main__page">

      <div className="aside">
        <Filters
          from="home"
          backpacksItems={itemsBackpacks}
          bagsItems={itemsBags}
          walletsItems={itemsWallets}
        />
      </div>

      <div className="all_products">

        {itemsBackpacks.map((obj) => {
          return (
            <ProductCard key={obj.id} {...obj} from="backpacks" />
          )
        })}
        {itemsBags.map((obj) => {
          return (
            <ProductCard key={obj.id} {...obj} from="bags" />
          )
        })}
        {itemsWallets.map((obj) => {
          return (
            <ProductCard key={obj.id} {...obj} from="wallets" />
          )
        })}
      </div>
    </div>
  );
}
