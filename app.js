const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cookieParser("cookie"));

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  session({
    secret: "abcdefg",
    resave: true,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const user = require("./route/userRoute.js");
const score = require("./route/scoreRoute.js");

app.use("/api/v1", user);
app.use("/api/v1", score);

app.use(errorMiddleware);

module.exports = app;
