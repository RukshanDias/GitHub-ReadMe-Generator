const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const generateMarkdown = require("./generateMarkdown");

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

app.listen(8000, () => {
    console.log("Server started on port 8000");
});
