const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const generateMarkdown = require("./generateMarkdown");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/api", (req, res) => {
    const formData = req.body;
    console.log(formData);
    // res.send("Form submitted successfully!");
    const markdown = generateMarkdown(formData);
    res.send(markdown);
});

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server started on port " + process.env.SERVER_PORT);
});
