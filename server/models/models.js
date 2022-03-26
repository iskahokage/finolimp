const sequelize = require("../db.js");

const { DataTypes } = require("sequelize");

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: {type: DataTypes.ENUM('startupper', 'investor', 'admin')}
})

const Startupper = sequelize.define("startupper", {
    firstName: {type: DataTypes.STRING, allowNull: false },
    lastName: {type: DataTypes.STRING, allowNull: false },
    phone: {type: DataTypes.STRING, allowNull: false },
    businessPlan: {type: DataTypes.STRING},
    presentationFile: {type: DataTypes.STRING},
    mvp: {type: DataTypes.BOOLEAN},
});

const Investor = sequelize.define("investor", {
    firstName: {type: DataTypes.STRING, allowNull: false },
    lastName: {type: DataTypes.STRING, allowNull: false },
    phone: {type: DataTypes.STRING, allowNull: false },
    certificate: {type: DataTypes.STRING, allowNull: false},
    company: {type: DataTypes.STRING}
})

const Post = sequelize.define('post',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false },
    description: {type: DataTypes.STRING, allowNull: false },
})

const Post_image = sequelize.define("post_image",{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, allowNull: false }
})

const Startupper_patent = sequelize.define("startupper_patent", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING},
    presentationFile: { type: DataTypes.STRING},
    businessPlan: {type: DataTypes.STRING},    
    mvp: { type: DataTypes.STRING},
    startupLogo: {type: DataTypes.STRING}
})


User.hasOne(Startupper);
Startupper.belongsTo(User);

User.hasOne(Investor);
Investor.belongsTo(User);

Post.hasMany(Post_image, {as: "post_images", onDelete: 'cascade'})
Post_image.belongsTo(Post,{
    foreignKey: "postId",
    as: "post"
})
Startupper.hasMany(Startupper_patent, {as: "startup_pattents", onDelete: 'cascade'})
Startupper_patent.belongsTo(Startupper, {
    foreignKey: "startupperId",
    as: 'startupper'
})



module.exports = {
    User,
    Startupper,
    Startupper_patent,
    Investor,
    Post,
    Post_image,
}