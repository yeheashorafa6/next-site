
import {Post , User} from './models';

export const getPosts = async () => {
  try {
    
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    // throw new Error("Fetching posts failed");
  }
};

export const getPost = async (slug) => {
  try {
    
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    // throw new Error("Fetching post failed");
  }
};

export const getUser = async (id) => {
  try {
   
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    // throw new Error("Fetching user failed");
  }
};

export const getUsers = async () => {
  try {
    
    const users = await User.find();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    // throw new Error("Fetching users failed");
  }
};
