const express = require("express");
const app = express();
const PORT = 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");  
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
