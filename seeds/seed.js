const sequelize = require('../config/connection');
const { User, Comment, Post } = require('../models');

const commentData = require('./commentData.json');
const userData = require('./userData.json');
const postData = require('./postData.json');