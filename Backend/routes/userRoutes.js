const express = require('express')
const { newUser, deleteUser, updateUser, getSingleUser, getAllUsers, blockUser } = require('../controller/user')

const router = express.Router();

router.route("/user/create").post(newUser);
router.route("/user/delete/:id").delete(deleteUser);
router.route("/user/update/:id").patch(updateUser);
router.route("/user/:id").get(getSingleUser);
router.route("/users").get(getAllUsers);
router.route("/admin/block/:id").patch(blockUser);

module.exports = router;