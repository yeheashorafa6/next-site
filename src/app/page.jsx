import Image from "next/image";
import styles from "./home.module.css";
import SocialLinks from "./SocialLinks/SocialLinks";

export default function Home() {

  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className="row w-100">
          <div className="col-lg-7 col-12 d-flex align-items-center mt-sm-4">
            <div className={styles.heroContent}>
              <h1>Creative Thoughts Agency</h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
                dolorum. Placeat ipsum eligendi, tempora culpa harum quasi unde
                perferendis .
              </p>
              <div className={`${styles.heroButton} mb-5`}>
                <button className={`${styles.btn} me-3`}>Learn More</button>
                <button className={`${styles.btn}`}>Contact Us</button>
              </div>
              <div className={styles.heroSocial}>
                <SocialLinks />
              </div>

            </div>
          </div>
          <div className="col-lg-5  col-12 text-center">
            <div className={styles.heroImage}>
              <Image src="/hero.gif" alt="hero" width={500} height={500}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
