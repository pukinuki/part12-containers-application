const express = require("express");
const router = express.Router();
const redis = require("../redis");

const configs = require("../util/config");

let visits = 0;

/* GET index data. */
router.get("/", async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

/* GET index data. */
router.get("/statistics", async (req, res) => {
  let counter = await redis.getAsync("added_todos");
  counter = counter ? Number(counter) : 0;
  res.send({
    added_todos: counter,
  });
});

module.exports = router;
