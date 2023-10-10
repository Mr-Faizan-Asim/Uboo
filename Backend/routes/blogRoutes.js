const express = require('express')
const { getAllBlog, deleteBlog, updateBlog, getSingleBlog, newBlog } = require("../controller/blogController.js")


const router = express.Router();

router.route("/blogs").get(getAllBlog);
router.route("/admin/deleteblog/:id").delete(deleteBlog);
router.route("/admin/updateblog/:id").post(updateBlog);
router.route("/admin/:id").get(getSingleBlog);
router.route("/admin/newblog").get(newBlog);

module.exports = router;