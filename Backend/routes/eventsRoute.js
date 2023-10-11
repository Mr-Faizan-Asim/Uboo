const express = require('express')
const { getAllEvent, deleteEvent, newEvent } = require("../controller/eventControler.js");



const router = express.Router();

router.route("/events").get(getAllEvent);
router.route("/admin/deleteevent/:id").delete(deleteEvent);
router.route("/admin/newevent").post(newEvent);

module.exports = router;