const express = require('express');
const router = express.Router();
const {Posts} = require('../models');

router.get('/posts', async (req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

router.get('/:subredditId', async (req, res) => {
    const subredditId = req.params.subredditId;
    const posts = await Posts.findAll({where: {subreddit_id: subredditId}});
    res.json(posts);
})

router.get('/post/:id', async (req, res) => {
    const id = req.params.id;
    const post = await Posts.findByPk(id);
    res.json(post);
});

router.post("/post", async (req, res) => {
    const post = req.body;
    await Posts.create(post);   //insert into DB
    res.json(post);     //return the info that was inserted into DB
});

module.exports = router;