const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const generateMarkdown = require("./generateMarkdown");
// const path = require("path");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use(express.static(path.join(__dirname, "client", "build")));

app.post(process.env.SERVER_URL, (req, res) => {
    const formData = req.body;
    console.log(formData);
    // res.send("Form submitted successfully!");
    const markdown = generateMarkdown(formData);
    res.send(markdown);
});

// app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server started on port " + process.env.SERVER_PORT);
});
