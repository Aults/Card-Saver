const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const apiPort = 8000
const uri = "mongodb+srv://defaultuser:defaultpassword@cluster0.3mczq.mongodb.net/card-saver-db"


app.use(cors())
app.use(express.json());


mongoose.connect(uri, { useNewUrlParser: true , useUnifiedTopology: true})

app.use("/", require("./routes/coordinatesRoute"))

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
