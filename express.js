const express = require('express');
const app = express();
const port = 3001

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.get('/about', (req,res) => {
    res.send('Hello About');
});

app.listen(port, ()=>{
    console.log(`Listening on post:${port}`);
})
