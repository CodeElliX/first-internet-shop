'use client'
import Search  from "../../src/app/search/page";
import styles from "./header.module.css";
import Link from "next/link";
import Image from 'next/image'
import logo from "../../public/logo.jpg";
import { usePathname } from "next/navigation";

 const Header = () => {
  const pathname = usePathname();
    return <div className={styles.header}>
   <Link href="/">
    <Image src={logo} alt="mouse" className={styles.logo}/>
    </Link>
     <Search />
     {pathname !== '/cart' && (
   <Link href="/cart">
   <button className={styles.cart_button}>
   <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
   <rect fill="none" height="256" width="256"/>
   <path d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16" fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
   <circle cx="80" cy="204" fill="none" r="20" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
   <circle cx="184" cy="204" fill="none" r="20" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
   <path d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48" fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
   </svg>
   </button>
   </Link>
     )}
  
    </div>
}

export default Header;
