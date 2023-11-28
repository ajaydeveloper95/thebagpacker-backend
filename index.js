const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./database/db");

// router file
const AdminRouter = require("./adminUser/adminRouter");

const PORT = 5000;

// For parsing application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// integrate the router on index page
app.use("/admin", AdminRouter);

app.listen(PORT, () => {
  console.log(`Server listen at addresh :http://localhost:${PORT} `);
});
