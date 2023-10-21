const app = require('./app.js')
const port = 3000;

app.listen(port, () => {
    console.log(`I am listening at http://localhost:${port}`)
})

app.get("/", (req, res) => {
    return res.json({ message: "Hello, World" });
});