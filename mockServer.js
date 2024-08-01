const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 8000;


app.get('/random_number', (req, res) => {
    const min = +req.query.min || 0;
    const max = +req.query.max || 10;
    console.log(min,max)
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    res.json({randomNumber});
})

app.get('/users',() =>{
    
})

app.listen(port, () => {
    console.log('Server listening on ', port)
})