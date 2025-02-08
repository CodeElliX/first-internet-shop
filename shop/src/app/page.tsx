import Categories from "./categories/page";
import Footer from "./footer/page";
import "./globals.css";
import Products from "./products/page";


export default function Home() {
  return (
    <div>
        <Categories />
        <Products />
        <Footer />
    </div>
  );
}
