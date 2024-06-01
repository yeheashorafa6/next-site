"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import styles from "./NavLink.module.css"

function NavLinks({item}) {
// console.log(item.path)
    const pathName = usePathname();
    // console.log(pathName)
  return (

    <Link className={`${styles.navLink} ${pathName === item.path && styles.active} `} href={item.path}>{item.title}</Link>
  )
}

export default NavLinks
