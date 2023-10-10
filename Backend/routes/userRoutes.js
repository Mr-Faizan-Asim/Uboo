const express = require('express')



const router = express.Router();

router.route("/user/create").post(createUser);
router.route("/user/delete/:id").deleteUser(deleteUser);
router.route("/user/update/:id").post(updateUser);
router.route("/user/:id").get(getUser);

router.route("/users").get(getAllUser);
router.route("/admin/block/:id").post(blockUser);



module.exports = router;