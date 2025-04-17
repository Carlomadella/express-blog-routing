const express = require('express');

const posts = express.Router();

// rotta principale (index)
posts.get('/', (req, res) => {
    res.send("Lista dei post");
});