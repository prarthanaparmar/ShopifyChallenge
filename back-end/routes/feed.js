const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const feedController = require("../controller/feed");

//GET /feed/posts
router.get("/posts", feedController.getPosts);

//POST /feed/post
router.post(
  "/post",
  [
    body("name").trim().isLength({ min: 5 }),
    body("description").trim().isLength({ min: 5 }),
    body("price").trim(),
  ],
  feedController.createPost
);
router.get(
  "/fetchpost/:postId",feedController.getPost
);


router.get('/getcsv', feedController.getcsvdata);

router.put('/editpost/:postId', feedController.updatePost);

router.delete('/deletepost/:postId', feedController.deleteItem);


module.exports = router;
