const express = require('express');
const router = express.Router();
const {Comments} = require('../models');
const {validateToken} = require("../middlewares/AuthMiddleware");

router.get('/:postId', async (req, res) => {
    const postId = req.params.postId;   //postId
    const comments = await Comments.findAll({ where: {post_id: postId}});		//get all comments with the postId equal to the postId being queried
    res.json(comments);
});

router.post("/", validateToken, async (req, res) => {						//create comments
    const comment = req.body;
    const author_Id = req.user.author_Id;      //---
    comment.author_Id = author_Id;
    await Comments.create(comment);
    res.json(comment);
});

module.exports = router;