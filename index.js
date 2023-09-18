const express = require("express");

const app = express();
app.use(express.json());


// get rounts

app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to Home pages</h1>")
})

app.get("/signup", (req, res) => {
    res.status(200).send("<h1>Welcome to Signup pages</h1>")
})

app.get("/login", (req, res) => {
    res.status(200).send("<h1>Welcome to Login pages</h1>")
})

// post rounts

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
})

app.post('/signup', (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
})

app.post('/login', (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
})

app.post('/index', (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
})

app.listen(8080,()=>{
    console.log("start server in 8080")
})