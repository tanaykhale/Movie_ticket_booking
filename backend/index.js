const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')

dotenv.config();

const movieSchema = new mongoose.Schema({
    row: String,
    col: Number
});
const Movie = mongoose.model('movie', movieSchema);
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

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

app.post('/setSeats', async (req, res) => {
    const { row, col } = req.body;
    console.log('Selected seat:', row, col);
    try {
        const seat = new Movie({ row, col });
        await seat.save();
        res.send({ status: "Seat updated and saved to DB" });
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: "Error saving seat" });
    }
})

app.get('/login', (req, res) => {

})