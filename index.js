const express = require("express");
const path = require("path")
const app = express();

const PORT = 5000;

app.get('/', function(req, res) {
if('name' in req.query)
{
        res.json({name:req.query.name})
}
else
{
        res.sendFile(path.join(__dirname, '/index.html'))
}
});

app.get("/health-check", (req, res) => {
        res.json({ message: "Server up and running"  });
})

app.listen(PORT, () => {
        console.log("Server Running on PORT", PORT);
})


