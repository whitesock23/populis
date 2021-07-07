const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const axios = require("axios");
let IdValidator = "https://angolaapi.herokuapp.com/api/v1/validate/bi/"
const cc = require('pt-id').cc;

router.get("/signup", (req, res) => {
    res.render("auth/signup");
});

router.post("/signup", async(req, res) => {
    const { username, email, password } = req.body;

    //check cartão de cidadão
    // try {
    //     IdValidator = `https://angolaapi.herokuapp.com/api/v1/validate/bi/${cc}`
    //     const responseFromApi = await axios.get(IdValidator);
    //     //const deputies = response.data;

    // } catch (e) {
    //     console.log(e);
    //     res.render("auth/signup", { errorMessage: "Please add a valid ID" });
    //     return;
    // }



    //check if username and password are filled in
    if (username === "" || password === "") {
        res.render("auth/signup", { errorMessage: "Fill username and password" });
        return;
    }

    //check for password strength
    const myRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/; //Changing the password strength
    if (myRegex.test(password) === false) {
        res.render("auth/signup", {
            errorMessage: "Password is too weak",
        });
        return;
    }

    //check if username already exists
    const user = await User.findOne({ username });
    if (user !== null) {
        res.render("auth/signup", { errorMessage: "Username already exists" });
        return;
    }

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);
    await User.create({
        username,
        email,
        password: hashedPassword,
    });
    res.redirect("/");
});

router.get("/login", (req, res) => {
    res.render("auth/login");
});

router.post("/login", async(req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.render("auth/login", {
            errorMessage: "Fill username and password",
        });
        return;
    }

    const user = await User.findOne({ username });
    if (!user) {
        res.render("auth/login", {
            errorMessage: "Invalid login",
        });
        return;
    }

    //Check for password
    if (bcrypt.compareSync(password, user.password)) {
        //Passwords match

        //Initializing the session with the current user
        req.session.currentUser = user;

        res.redirect("/");
    } else {
        //Passwords don't match
        res.render("auth/login", {
            errorMessage: "Invalid login",
        });
    }
});

router.post("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

// Validate CC Portugal

router.get("/cc_portugal", (req, res) => {
    res.render("auth/cc_portugal", { layout: false });
});

router.post("/cc_portugal", async(req, res) => {
    const { cartCid } = req.body;
    console.log(cartCid)

    if (cc.validate(`${cartCid}`)) {
        console.log('is valid');
        res.render("auth/signup", { GoodMessage: "O seu número é válido " });

    } else {
        console.log('not valid', { errorMessage: "O seu número é inválido, verifique" });
    };
});

// Validate CC Angola

router.get("/cc_angola", (req, res) => {
    res.render("auth/cc_angola", { layout: false });
});

router.post("/cc_angola", async(req, res) => {
    const { cc } = req.body;
    try {
        IdValidator = `https://angolaapi.herokuapp.com/api/v1/validate/bi/${cc}`
        const responseFromApi = await axios.get(IdValidator);
        res.redirect("/signup")
        console.log('is valid')
            //const deputies = response.data;

    } catch (e) {
        console.log(e);
        res.render("index", { errorMessage: "Please add a valid ID" });
        console.log('not valid')
        return;
    }
});

module.exports = router;