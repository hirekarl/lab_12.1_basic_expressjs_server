const express = require("express")
const path = require("path")

const app = express()
const port = 3000

const public = path.join(__dirname, "public")

// Handles the "/" route
app.use(express.static(public))

// Handles the "/contact" route
app.get("/contact", (req, res) => {
  res.sendFile(path.join(public, "contact.html"))
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
