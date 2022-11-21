const express = require('express')
const express1 = require('express1')
const app = express()
const app1 = express1()

app.get('/', (req, res) => res.send('Hello World 1111!!'))
app1.get('/', (req, res) => res.send('I am João Teixeira!!'))
app.listen(3000, () => console.log('Server ready'))
app1.listen(3000, () => console.log('Server ready'))