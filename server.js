//imports
const express = require('express');
require('dotenv').config();

//initializing express server | req-res handler
const app = express();

//1st argument is endpoint, 2nd argument callback fn() 
//REST API endpoint
app.get('/rest', (req, res) => {
    res.json({
        data: 'you hit rest endpoint'
    });
});

app.listen(process.env.PORT, () => {
    console.log(`server initialized at http://localhost:${process.env.PORT}`);
});