const express = require('express')
const app = express()
app.get('/',(req,res)=>RegExp.send('Hello Express'))
app.listen(80)