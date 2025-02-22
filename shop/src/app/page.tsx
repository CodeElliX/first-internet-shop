import "./globals.css";
import Backpacks from "./backpacks/page";
import Wallets from "./wallets/page";
import Bags from "./bags/page";
// import Filters from "../../components/filters/page";


export default function Home() {
  return (
    <div className="main__page">
      <div className="aside">
        {/* <Filters /> */}
      </div>
      <div className="all_products">
        <Backpacks />
        <Wallets />
        <Bags />
      </div>
    </div>
  );
}
