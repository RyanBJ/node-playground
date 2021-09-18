import express from 'express'
import {ryan} from './modules/ryan.js'

const app = express()
const port = process.env.PORT || 3000

// Set static folder
// app.use(express.static(path.join(__dirname, 'static')))

app.get('/ryan', (req, res) => {
    res.send(ryan())
})

app.listen(port, () => {
    console.log(`App listening at http://node.ryanbj.com:${port}`)
})