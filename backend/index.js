const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;


const app = express();

app.use(express.json());
app.use(cors({
  origin: ["https://3000-black-buzzard-v2057bi9.ws-us23.gitpod.io"],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(session({
  key: "userId",
  secret: "sub",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24,
  },
})
);

 const db = mysql.createConnection({
     user: "root",
     host: "localhost",
     password: "frtysk489",
     database: "syst"
 })

  app.post("/register", (req, res) => {

      const username = req.body.username;
      const password = req.body.password;

      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          console.log(err);
        }
  db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hash], 
     (err, result) => {
         console.log(err);
     });
      }) 
  }) 

  app.get("/register", (req, res) => {
    if (req.session.user) {
      res.send("youtube.com")
    } else {
      res.send({ registered: false })
    }
  })

  app.get("/login", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user })
    } else {
      res.send({ loggedIn: false })
    }
  })

  app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

   db.query("SELECT * FROM users WHERE username = ?;",
    username, (err, result) => {
     if (err) {
      res.send({err: err})
    } 
       if (result.length > 0) {
         bcrypt.compare(password, result[0].password, (error, response) => {
           if (response) {
            req.session.user = result;
             console.log(req.session.user);
            res.send("result")
           } else {
            res.send({ message: "Wrong username/password combination!"})
           }
         })
       } else {
         res.send({ message: "User doesn't exist"})
       }
     });
  })


app.listen(5001, () => {
  console.log("running server");
});