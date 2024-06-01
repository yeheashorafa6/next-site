import React from "react";
import styles from "./PostCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
function PostCard({post}) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.cardImg}>
          <Image src={"/image.jpg"} alt="post" fill />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={`${styles.cardTitle}`}>{post.title}</h1>
        <p className={styles.cardDesc}>
          {post.body}
        </p>
        <Link href={`/Blog/${post.id}`} className={styles.linkCard}>Read More <span><FontAwesomeIcon className={styles.iconCard} style={{width : "20px"}} icon={faArrowAltCircleRight}/></span></Link>
      </div>
    </div>
  );
}

export default PostCard;
