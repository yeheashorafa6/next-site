import React from 'react'
import styles from "./PostUser.module.css";
import {getUser} from '@/lib/data';

// FETCH DATA WITH AN API
const getData = async (userId)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if(res.ok){
      console.log("error")
  }
    const data = await res.json();
    return data;
  }
async function PostUser({userId}) {

    //   FETCH DATA WITH  AN API
    const user = await getData(userId);


    //   FETCH DATA WITH OUT AN API
    // const user = await getUser(userId);

  return (
    <div className={`${styles.container} ms-2`}>
        <span className={styles.title}>Author </span>
        <span className={styles.userName}>{user.name}</span>
  </div>
  )
}

export default PostUser
