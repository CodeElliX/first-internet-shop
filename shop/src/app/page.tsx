import Categories from "./categories/page";
import Footer from "./footer/page";
import "./globals.css";
import Products from "./products/page";


export default function Home() {
  return (
    <div className="body_page">
        <Categories />
        <Products />
        <Footer />
    </div>
  );
}
