import React from 'react'
import styles from "./footer.module.css"
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className="row">
           <div className="col-6">
              <div className={styles.logo}>
                <Link href={"/"}>
                  <Image src={"/logo.png"} alt="logo" width={70} height={70}/>
                </Link>
              </div>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-end">
              <div className="copyright">
                <p>Copyright &copy; 2024. All rights reserved <br /> 
                  <span className='ms-5'>Desing By | <span className={`${styles.name}`}>Yehea shorafa.</span></span> </p>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
