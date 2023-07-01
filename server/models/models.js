const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username:{type: DataTypes.STRING, unique: true},
    password:{type: DataTypes.STRING},
});

const Notes = sequelize.define('notes',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING},
    description:{type: DataTypes.STRING},
});

User.hasMany(Notes)
Notes.belongsTo(User);

module.exports = {
    User,
    Notes
}