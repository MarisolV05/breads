const express = require('express')
const app = express()

//configuration:
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

//routes:
app.get('/', (req, res) => {
    res.send('Welcome to the World of Bread!')
})

const breadsControllers =require('./controllers/breads_controllers.js')
app.use('/breads', breadsControllers
)

app.listen(PORT, ()=> {
    console.log('listening on port: ', PORT);
})
