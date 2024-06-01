import Image from "next/image"
import styles from "./Contact.module.css"

export const metadata = {
  title: "Contact",
  description: "Contact Description",
};
function ContactPage() {

    return (
      <section className={styles.contact}>
        <div className="contaier">
          <div className="row w-100">
            <div className="col-lg-5 col-12">
              <div className={`${styles.contactImage} text-center`}>
                <Image src={"/contact.png"} alt="contact" width={400} height={400}/>
              </div>
            </div>
            <div className="col-lg-7 col-12 mt-4">
              <form className={`${styles.form} d-flex`} >
                <div className="mb-3">
                  <input type="text" className={`${styles.formControl} form-control`} id="name" placeholder="Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className={`${styles.formControl} form-control`} id="email" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <input type="number" className={`${styles.formControl} form-control`} id="phoneNumber" placeholder="Phone Number (optional)" />
                </div>
                <div className="mb-3">
                  <textarea className={`${styles.formControl} form-control`} id="message" rows="5" placeholder="Message"></textarea>
                </div>
                <button type="submit" className={`${styles.formControl} btn`}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default ContactPage
  