const mysql = require("mysql");
//const jwt =  require('jsonwebtoken');
//const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.register = (req, res) => {
    console.log(req.body);

     const { name, email, password, passwordConfirm } = req.body;

     db.query('SELECT email FROM users WHERE email = ?', [email], (error, results) => {
         if(error) {
            console.log(error)
         }

         if(results.length > 0) {
            return res.render("register", {
              message: "This email is already in use"
            })
         } else if (password !== passwordConfirm) {
            return res.render("register", {
                message: "Passwords do not match"
              });
         }

         db.query("INSERT INTO users SET ?", {username: name, email: email, password: password }, (error, results) => {
             if (error) {
                console.log(error);
             } else {
                 console.log(results);
            return res.redirect('https://3000-rose-canidae-wp9440et.ws-us23.gitpod.io/');
             }
         })
     })
} 