import React from "react";
import Links from "./Links/Links";
import styles from"./Navbar.module.css"
import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";
import Image from "next/image";
function Navbar() {
  return (
    <div className="navbar">
      <div className={styles.container}>
          <div className="row w-100 d-flex">
              <div className="col-3">
                  <div className={styles.logo}>
                      <Link href={"/"}>
                        <Image src={"/logo.png"} alt="logo" width={120} height={120}/>
                      </Link>
                  </div>
              </div>

              <div className="col-9 d-flex justify-content-end mt-4">
                  <div className={styles.links}>
                      <Links/>
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Navbar;
