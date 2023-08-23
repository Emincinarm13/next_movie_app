import React from 'react'
import {FaPlayCircle} from "react-icons/fa"
import styles from "./style.module.css"
import Link from 'next/link'
 function Header() {
  return (
  <header className={'${styles.header} container fluid'}>
      <div className={styles.headerWrapper}>
       <Link href="/"><FaPlayCircle className={styles.logo}/> NETFILMS</Link>
        
        <nav className={styles.navigationMenu}>
       <Link href="/">Movies</Link>
        <Link href="/">Series</Link>

        <Link href="/">Kids</Link>

{/* 
replace={true} e ticaret sitesinde ürün filtrelerken yukarıda url değişir ve girilen her sayfa historyde tutulur.
replace{true} yaparsak historye atmaz ve ne kadar url querysi değişse de ger geldiğimizde en başa döneriz filtreleri queryleri tek tek geri almaz
*/}
       </nav>
   
     
       
    </div>
  
  </header>
  
  );
}

export default Header;