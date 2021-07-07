const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const Circle = require("../models/Circle.model")



router.get("/users", async (req, res) => {
    const users = await Book.find().sort({ title: 1 }).populate("circle");
    res.render("users/users-list", { layout: false, users });
  });
  
  //Gets the detail of book, by using bookId

  router.get("/books/:bookId", async (req, res) => {
    const bookDetail = await Book.findById(req.params.bookId).populate("author");
    res.render("books/book-detail", bookDetail);
  });

module.exports = router;