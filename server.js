const express = require('express')
const app = express()

//configuration:
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

// MIDDLEWARE
const breadsControllers = require('./controllers/breads_controllers')
app.use('/breads', breadsControllers)
app.use(express.static('public'))
// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//routes:
app.get('/', (req, res) => {
    res.send('Welcome to the World of Bread!')
})
// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })

app.listen(PORT, ()=> {
    console.log('listening on port: ', PORT);
})