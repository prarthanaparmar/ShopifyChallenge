const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const feedController = require("../controller/feed");

//To view items
router.get("/posts", feedController.getPosts);

//To create an item
router.post(
  "/post",
  [
    body("name").trim().isLength({ min: 5 }),
    body("description").trim().isLength({ min: 5 }),
    body("price").trim(),
  ],
  feedController.createPost
);

//To fetch a particular id
router.get(
  "/fetchpost/:postId",feedController.getPost
);

//To gwt db data in a CSV file
router.get('/getcsv', feedController.getcsvdata);

//To edit an item
router.put('/editpost/:postId', feedController.updatePost);

//To delete an item
router.delete('/deletepost/:postId', feedController.deleteItem);


module.exports = router;
