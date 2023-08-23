import React from 'react'
import Link from 'next/link'
import styles from "./style.module.css"
export default function Footer() {
  return (
    
      <footer className={styles.footer}>
        Made with xxx      

        <Link href="http://cinarweb.com.tr" target="_blank">
          emin cinar
        </Link>
      </footer>
    
  );
}
