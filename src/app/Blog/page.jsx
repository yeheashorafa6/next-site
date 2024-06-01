// "use client";
import PostCard from '@/Component/PostCard/PostCard';
import styles from './Blog.module.css';
import { getPosts } from '@/lib/data';


export const metadata = {
  title: "Posts",
  description: "Posts Description",
};

// FETCH DATA WITH AN API
const getData = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts' , {
    // next : {
    //   revalidate : 7200
    // }
  });
  if(res.ok){
    console.log("error")
}
  const data = await res.json();
 return data.slice(0, 9);
}


async function BlogPage() {

  

  // FETCH DATA WITH AN API
  const posts =await getData()

  // FETCH DATA WITH OUT AN API
  // const posts = await getPosts();
    return (
      <section className="blog">
        <div className={styles.container}>
          <div className="row w-100">      
            {
              posts.map((post)=>{
                return (
                  <div className="col-lg-4 col-md-6 col-12 post" key={post.id}>
                    <PostCard post={post}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    )
  }
  
  export default BlogPage
  