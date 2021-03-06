const express = require("express");

const recipe = require("./recipe-module.js");

const router = express.Router();

// All recipes (without details about ingredients or steps)
router.get("/", (req, res) => {
  recipe
    .getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

// A list of ingredients and quantites for a single recipe
router.get("/:id/shoppingList", (req, res) => {});

// A correctly ordered list of how to prepare a single recipe
router.get("/:id/instructions", (req, res) => {});

// All recipes in the system that utilize a single ingredient
router.get("/:id/recipes", (req, res) => {});

module.exports = router;
