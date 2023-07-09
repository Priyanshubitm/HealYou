import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";
import UserModel from "../Models/UserModel.js";

// Creat new Post
export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    console.log(newPost);
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
};


export const getPost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};


export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const {userId} =req.body;

  try {
    const post = await PostModel.findById(postId);

    if(post.userId === userId){
      await post.updateOne({ $set : req.body});
      res.status(200).json("post Updated");
    }else{
      res.status(403).json("You cant update this post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deletePost = async (req, res) => {
  const postId = req.params.id;
  const {userId} =req.body;
  
  try {
    const post = await PostModel.findById(postId);

    if(post.userId === userId){
      await post.deleteOne();
      res.status(200).json("post Deleted successfully");
    }else{
      res.status(403).json("You cant delete this post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const likePost = async (req, res) => {
  const id = req.params.id;
  const {userId} =req.body;
  
  try {
    const post = await PostModel.findById(id);

    if(!post.likes.includes(userId)){
      await post.updateOne({$push : {likes : userId}});
      res.status(200).json("post liked");
    }else{
      await post.updateOne({$pull : {likes : userId}});
      res.status(200).json("post Disliked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const hugPost = async (req, res) => {
  const id = req.params.id;
  const {userId} =req.body;
  
  try {
    const post = await PostModel.findById(id);

    if(!post.hugs.includes(userId)){
      await post.updateOne({$push : {hugs : userId}});
      res.status(200).json("post hugged");
    }else{
      await post.updateOne({$pull : {hugs : userId}});
      res.status(200).json("post hug toggled");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};


export const getTimelinePost = async (req, res) => {
  const userId = req.params.id;
  
  try {
    const currentUserPost = await PostModel.find({userId : userId});
    const followingPosts = await UserModel.aggregate([
      {
        $match:{
          _id : new mongoose.Types.ObjectId(userId)
        }
      },
      {
        $lookup :{
          from :"posts",
          localField: "following",
          foreignField :"userId",
          as : "followingPosts"
        }
      },
      {
        $project : {
          followingPosts :1,
          _id:0
        }
      }
    ])
    res.status(200).json(currentUserPost.concat(...followingPosts[0].followingPosts)
    .sort((a,b)=>{
      return b.createdAt - a.createdAt;
    })
    );


  } catch (error) {
    res.status(500).json(error);
  }
};