import Image from "next/image";
import styles from "./SinglePost.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardFast } from "@fortawesome/free-solid-svg-icons";
import { getPost, getPosts } from "@/lib/data";
import PostUser from "@/Component/PostUser/PostUser";
import { Suspense } from "react";

// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    console.log("error");
  }
  const data = await res.json();
  return data;
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getData(slug);

  return {
    title: post.title,
    description: post.body,
  };
};
async function SinglePostPage({ params }) {
  const { slug } = params;

  // FETCH DATA WITH AN API
  const post = await getData(slug);

  // FETCH DATA WITH OUT AN API
  // const post = await getPost(parseInt(slug));

  return (
    <div className={styles.container}>
      <div className="row w-100">
        <div className="col-lg-5 col-12">
          <div className={styles.postImage}>
            <Image src={"/flour.jpg"} alt="post" fill />
          </div>
        </div>
        <div className="col-lg-7 col-12">
          <div className={styles.postContent}>
            <h1 className={`${styles.title} mt-4`}>{post.title}</h1>
            <div className={styles.details}>
              <Image
                width={40}
                height={40}
                className={styles.avatar}
                alt="avatar"
                src={"/noavatar.png"}
              />
              <Suspense fallback={<div>Loading ...</div>}>
                <PostUser userId={post.userId} />
              </Suspense>
              <div className={`${styles.detalText} ms-2`}>
                <span className={styles.detailTitle}>Puplish </span>
                <span className={styles.detailValue}>01.01.2024</span>
              </div>
            </div>
            <div className={styles.desc}>
              <p>{post.body}</p>
            </div>
            <Link href={"/Blog"} className={styles.siglePostLink}>
              Back To Posts
              <span className="ms-2">
                <FontAwesomeIcon
                  className={styles.siglePostIcon}
                  icon={faBackwardFast}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;
