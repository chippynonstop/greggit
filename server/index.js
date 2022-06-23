const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');

app.use(express.json());
app.use(cors());

//Routers
const subredditRouter = require('./routes/Subreddits');
app.use("/subreddits", subredditRouter);
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);
const commentRouter = require('./routes/Comments');
app.use("/comments", commentRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});

