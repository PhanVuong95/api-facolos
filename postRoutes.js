const {
  listPost,
  createPost,
  exportPostsToExcel,
} = require("./postController");
const express = require("express");

const router = express.Router();

router.get("/posts", listPost);
router.post("/posts", createPost);
router.get("/export-posts", exportPostsToExcel);

module.exports = router;
