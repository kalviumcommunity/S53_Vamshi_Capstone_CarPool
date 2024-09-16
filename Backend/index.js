const express = require('express')

const app = express()

app.get('/' , (req, res)=>{
    res.send('Basic route')
})

app.get('/profilepage', (req , res)=>{  
    res.send('profile')
})
    
app.get('/feedpage', (req , res)=>{  
    res.send('feed page')
})

app.listen(8000, ()=> {
    console.log('Port running on 8000')})