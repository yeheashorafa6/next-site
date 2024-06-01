"use client";
import React, { useState } from 'react'
import styles from"./Links.module.css"
import NavLinks from './NavLinks/NavLinks'

const links = [
  {title : "HomePage" , path : "/"},
  {title : "About" , path : "/About"},
  {title : "Contact" , path : "/Contact"},
  {title : "Blog" , path : "/Blog"},
]
function Links() {

  // STATE

  const[openMenu , setOpenMenu] =useState(false);

  // == STATE ==
 

    const session = true;
    const isAdmin = false;
  return (
    <div className={styles.contaienr}>
        <div className={styles.navItems}>
        {
          links.map((link)=>{
              return (
                  <nav className="nav-item me-auto" key={link.title}>
                      <NavLinks  item={link}/>
                  </nav>
              )
          })
        }
        {
          session ? (
            <>
            {
              isAdmin && <NavLinks  item={{title : "Admin" , path : "/Admin"}}/>
            }
            <button className={styles.btnLogout}>Logout</button>
            </>
          ) : (
            <NavLinks  item={{title : "Login" , path : "/Login"}}/>
          )
        }

      </div>
      <button className={styles.menuBtn} onClick={() =>{setOpenMenu((prev) =>!prev)}}>
        <span className=''></span>
      </button>
      {
        openMenu && (
          <div className={styles.mobileLink}>
            {
              links.map((link)=>{
                return(
                  <NavLinks  item={link} key={link.title}/>
                )
              })
            }
             {
          session ? (
            <>
            {
              isAdmin && <NavLinks  item={{title : "Admin" , path : "/Admin"}}/>
            }
            <button className={styles.btnLogout}>Logout</button>
            </>
          ) : (
            <NavLinks  item={{title : "Login" , path : "/Login"}}/>
          )
        }
          </div>
        )
      }
    </div>
  )
}

export default Links
