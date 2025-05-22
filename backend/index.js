const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.listen(9000, (err) => {
    if (!err)
        console.log("Server created!!!");
    else
        console.log("Error: " + err);
})

app.get('/getSeats', (req, res) => {
    let seats = [{ rows: '10', cols: '10' }];
    res.send(seats);
})

app.post('/setSeats', (req, res) => {

})