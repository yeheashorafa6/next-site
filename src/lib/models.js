// import mongoose from "mongoose";
// import { Schema, model, models } from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//       unique: true,
//       minLength: 3,
//       maxLength: 15,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       maxLength: 50,
//     },
//     password: {
//       type: String,
//       required: true,
//       minLength: 6,
//       maxLength: 15,
//     },
//     img: {
//       type: String,
//     },
//     isAdmin: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const postSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     desc: {
//       type: String,
//       required: true,
//       maxLength: 70,
//     },
//     img: {
//       type: String,
//     },
//     userId: {
//       type: String,
//       ref: "User",
//       required: true,
//     },
//     slug: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export const User = models.user || model("User", userSchema);
// export const Post = models.post || model("Post", postSchema);
