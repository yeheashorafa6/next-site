import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./SocialLinks.module.css";

const links = [
    { id : 1,  icon: faFacebook, url: "https://www.facebook.com/profile.php?id=61556157676426" },
    { id : 2,  icon: faTwitter, url: "https://www.instagram.com/yehea__sh/" },
    { id : 3,  icon: faGithub, url: "https://github.com/yeheashorafa6"}

  ]
function SocialLinks() {
  return (
   links.map((link) => {
    return (
      <div className={styles.socialItem} key={link.id} style={{display:"inline-block"}} >
        <a href={link.url} className={styles.socialLink} >
          <FontAwesomeIcon icon={link.icon} style={{width : "30px" }} className={styles.socialIcon} />
        </a>
      </div>
    )
   }
  )
)
}

export default SocialLinks
