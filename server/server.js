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

// app.use((req, res, next) => {
//     res.setHeader('Content-Security-Policy", "connect-src https://github-readme-generator-api.onrender.com');
//     next();
// });

app.post('/generate-readme', (req, res) => {
    const formData = req.body;
    console.log(formData);
    // res.send("Form submitted successfully!");
    const markdown = generateMarkdown(formData);
    res.send(markdown);
});

// app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

try {
    const PORT = process.env.SERVER_PORT || 8000;
    app.listen(PORT, () => {
        console.log("Server started on port " + process.env.SERVER_PORT);
    });
} catch (err) {
    console.error("Error starting server:", err);
}
