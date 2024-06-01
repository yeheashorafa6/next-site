"use client"
import Image from "next/image";
import styles from "./About.module.css";
import CountUp from "react-countup";


// export const metadata = {
//   title: "About",
//   description: "About Description",
// };
function AboutPage() {
  return (
    <>
    <section className={`${styles.about}`}>
      <div className={`${styles.container}`}>
        <div className="row w-100">
          <div className="col-lg-7 col-12 d-flex align-items-center mb-5">
            <div className={`${styles.aboutContent} `}>
                <h1 className={`${styles.subTitle} mb-3`}>About Us</h1>
                <h1 className={`${styles.title} mb-3`}>We create digital ideas that are bigger, bolder, braver</h1>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, quaerat. asperiores debitis iste corrupti fugiat,
                  praesentium tempora provident suscipit?
                </p>
                <div className={`${styles.boxs} d-flex justify-content-between mt-5`}>
                  <div className={`${styles.box} me-3`}>
                    <h2 className={styles.countNum}>
                      <CountUp  end={15} duration={2} /> + <br/>
                      <span className={styles.countTitle}>Year Of Experence</span>
                    </h2>
                  </div>
                  <div className={`${styles.box} me-3`}>
                    <h2 className={`${styles.countNum} `}>
                      <CountUp end={90} duration={2} /> + <br/>
                      <span className={styles.countTitle}>Projects Completed</span>
                    </h2>
                  </div>
                  <div className={`${styles.box} me-3`}>
                    <h2 className={styles.countNum}>
                      <CountUp end={500} duration={2} /> + <br/>
                      <span className={styles.countTitle}>Happy Clients</span>
                    </h2>
                  </div>
                </div>
            </div>
          </div>  
          <div className="col-lg-5 col-12 d-flex justify-content-center">
              <Image className={styles.aboutImage} src="/about.png" alt="about" width={450} height={450}/>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default AboutPage;
