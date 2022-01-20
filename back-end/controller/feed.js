const { validationResult } = require("express-validator");
const fastcsv = require("fast-csv");
const mongodb = require("mongodb").MongoClient;
const filesys = require("fs");
const writestream = filesys.createWriteStream("products.csv");
const Post = require("../models/post");

exports.getPosts = (req, res, next) => {
  Post.find()
    .then((data) => {
      res.json({data});
      console.log(data);
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed. Please check the input data!");
    error.statusCode = 422;
    throw error;
  }

  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const post = new Post({
    name: name,
    description: description,
    price: price,
  });
  post
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Post created successfully!",
        post: result,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getPost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then((post) => {
      if (!post) {
        const error = new Error("Could not find post");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: "Post fetched", post: post });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getcsvdata = (req, res, next) => {
  
  mongodb.connect(
    "mongodb+srv://admin:admin1234@cluster1.kaoyn.mongodb.net/myMongoNews",
    (err, client) => {
      if (err) throw err;
      client
        .db("myMongoNews")
        .collection("posts")
        .find({})
        .toArray((err, data) => {
          if (err) throw err;

          console.log(data);
          fastcsv.write(data, {headers: true})
          .on("finish", function() {
           console.log("Data exported! Please check back-end/product.csv file")
           res.send();
        }).pipe(writestream);
      });
    }
  )
};

exports.updatePost = (req, res, next) => {
  const postId = req.params.postId;
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;

  Post.findById(postId)
    .then((post) => {
      if (!post) {
        const error = new Error("Could not find item");
        error.statusCode = 404;
        throw error;
      }
      post.name = req.body.name;
      post.description = req.body.description;
      post.price = req.body.price;
      return post.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Post Updated", post: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteItem = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then((post) => {
      if (!post) {
        const error = new Error("Could not find item");
        error.statusCode = 404;
        throw error;
      }
      return Post.findByIdAndRemove(postId);
    })
    .then((result) => {
      res.status(200).json({ message: "Post Deleted", post: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
