import { PostModel } from "../models/post_model.js";

export const getPost = async (req, res) => {
  try {
    const post = new PostModel({
      title: "HI",
      content: "Anhon",
      author: "Anonymous",
    });

    post.save();

    const posts = await PostModel.find();
    console.log("Post", posts);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const createPost = async (req, res) => {
  try {
    const newPost = req.body;

    const post = new PostModel(newPost);
    await post.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updatePost =async (req, res) => {
  try {
    const updatePost = req.body;

    const post = await new PostModel.findOneAndUpdate(
      { _id: updatePost._id },
      updatePost,
      {new: true}
    );
    await post.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
