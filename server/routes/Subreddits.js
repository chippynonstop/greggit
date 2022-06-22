const express = require('express');
const router = express.Router();

const {Subreddits} = require("../models");

router.get('/', async (req, res) => {
    const listOfSubreddits = await Subreddits.findAll();
    res.json(listOfSubreddits);
});

router.post("/", async (req, res) => {
    const subreddit = req.body;
    await Subreddits.create(subreddit);
    res.json(subreddit);
});

module.exports = router;