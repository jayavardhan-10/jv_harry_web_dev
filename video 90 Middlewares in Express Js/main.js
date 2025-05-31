const express = require('express')
const app = express()
const port = 3000

// app.use(express.static("public"))

//-----------------
//middleware 1
app.use((req, res, next) => {
    console.log('m1')
    res.send("hello res sent")
    // next()
})

//middleware 2
app.use((req, res, next) => {
    console.log('m2')
    next()
})

//-----------------
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
