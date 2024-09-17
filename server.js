require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('running on 3000 cups of coffee')
    console.log(`The secret is: ${process.env.SECRET_PASSWORD}`)
})

