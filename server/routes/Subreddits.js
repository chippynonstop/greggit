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

/*
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const subreddit = await Subreddits.findByPk(id);
    res.json(subreddit);
});
*/

module.exports = router;