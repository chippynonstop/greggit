const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
        body: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
        },
    });

    return Comments;
};