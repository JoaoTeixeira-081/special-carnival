const express = require('express')
const app = express()
const app1 = express()

app.get('/', (req, res) => res.send('Hello World!!'))
app1.get('/', (req, res) => res.send('I am João Teixeira!!'))
app.listen(3000, () => console.log('Server ready'))