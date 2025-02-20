import "./globals.css";
import AllProducts from "./allProducts/page";
import Backpacks from "./backpacks/page";
import Wallets from "./wallets/page";
import Bags from "./bags/page";


export default function Home() {
  return (
    <div className="main__page">
      <AllProducts />
      <Backpacks />
      <Wallets />
      <Bags />
    </div>
  );
}
