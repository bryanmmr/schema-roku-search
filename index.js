const express = require("express")
const app = express()
const port = 3000
const fs = require("fs")

app.get("/", (req, res) => {
    res.send("START")
})

app.get("/schema", (req, res) => {
    const schema = fs.readFileSync("./schema.json")
    res.json(JSON.parse(schema))
    res.status(200)
})

app.listen(port, () => {
    console.log("Listening---")
})