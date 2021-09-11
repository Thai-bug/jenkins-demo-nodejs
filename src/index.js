const express = require('express')

const app = express()

app.get('/', async(req, res)=>{
    res.json('hello')
})

app.get('/hello', async(req, res)=>{
    res.json('hello world')
})

app.listen(3000,()=>{
    console.log('run at 3000')
})