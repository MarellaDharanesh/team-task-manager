const express = require("express");

const router = express.Router();

const {
  createProject,
  getProjects,
} = require("../controllers/projectController");

const {
  protect
} = require("../middleware/authMiddleware");

// Create Project
router.post("/", protect, createProject);

// Get All Projects
router.get("/", getProjects);

module.exports = router;