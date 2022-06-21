const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Subreddits = sequelize.define("Subreddits", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
        },
    });

    Subreddits.associate = (models) => {
        Subreddits.hasMany(models.Posts, {
            foreignKey: 'subreddit_id',
            onDelete: "cascade",
        });
    };

    return Subreddits;
};