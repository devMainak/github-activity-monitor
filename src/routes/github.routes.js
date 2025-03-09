const express = require("express");
const router = express.Router();
const {
  getUserDetails,
  getRepoDetails,
  createIssue,
} = require("../controller/git.controller");

router.get("/", getUserDetails);
router.get("/:repo", getRepoDetails);
router.post("/:repo/issues", createIssue);

module.exports = router;
