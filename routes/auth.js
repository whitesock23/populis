const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const axios = require("axios");
<<<<<<< HEAD
let IdValidator = "https://angolaapi.herokuapp.com/api/v1/validate/bi/"

router.get("/signup", (req, res) => {
    res.render("auth/signup");
});

router.post("/signup", async(req, res) => {
    const { username, email, cc, password } = req.body;

    //check cartão de cidadão
=======
let IdValidator= "https://angolaapi.herokuapp.com/api/v1/validate/bi/"

/*  router.get("/", (req, res)=>{
    res.render("/")
}); 
router.post("/", async (req,res)=>{
    const {cc} = req.body;

>>>>>>> 042c4e5ca50c752ef3416e274046c120a7f74efb
    try {
        IdValidator = `https://angolaapi.herokuapp.com/api/v1/validate/bi/${cc}`
        const responseFromApi = await axios.get(IdValidator);
        //const deputies = response.data;

    } catch (e) {
<<<<<<< HEAD
        console.log(e);
        res.render("auth/signup", { errorMessage: "Please add a valid ID" });
        return;
    }
=======
        //console.log(e);
        res.render("/", { errorMessage: "Please add a valid ID" });
      return;
    }    
});
  */
router.get("/signup", (req, res) => {
    res.render("auth/signup");
});


router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

//check cartão de cidadão
     
>>>>>>> 042c4e5ca50c752ef3416e274046c120a7f74efb



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
        cc,
        password: hashedPassword,
    });
    res.redirect("/");
});

router.get("/login", (req, res) => {
    res.render("auth/login");
<<<<<<< HEAD
});

router.post("/login", async(req, res) => {
=======
  });

  router.post("/login", async (req, res) => {
>>>>>>> 042c4e5ca50c752ef3416e274046c120a7f74efb
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

module.exports = router;