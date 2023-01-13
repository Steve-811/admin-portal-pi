const express       = require('express')
const app           = express()
const bodyParser    = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const { students,studentsList } = require('./students')

app.get('/students', studentsList)

app.post('/students/create', students)


app.listen(3000, () => {
    console.log("running on port 3000")
})