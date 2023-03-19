const express = require('express')
const app = express()
const PORT = 4000

app.get('/', (req, res) =>{
     res.render('index')
    })

app.listen(PORT,console.log(`Example app listening on port ${PORT}!`))