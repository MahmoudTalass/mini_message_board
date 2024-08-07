const express = require("express");
const path = require("node:path");
require("dotenv").config();

const indexRouter = require("./routes/index");

const app = express();

// view engine setup
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// error handler
app.use(function (err, req, res, next) {
   res.locals.message = err.message;
   res.locals.error = req.app.get("env") === "development" ? err : {};

   // render the error page
   res.status(err.status || 500);
   res.render("error");
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
