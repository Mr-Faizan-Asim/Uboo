const express = require('express')
const { getAllBlog, deleteBlog, updateBlog, getSingleBlog, newBlog } = require("../controller/blogController.js")


const router = express.Router();

router.route("/blogs").get(getAllBlog);
router.route("/admin/deleteblog/:id").delete(deleteBlog);
router.route("/admin/updateblog/:id").patch(updateBlog);
router.route("/admin/:id").get(getSingleBlog);
router.route("/admin/newblog").post(newBlog);

module.exports = router;