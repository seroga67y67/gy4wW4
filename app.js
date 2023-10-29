const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const opn = require('opn');
const PORT = 3000;
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


app.post('/submit', (req, res) => {
    let data = req.body;
    let date = new Date();

    let msg = `Замовллення на сайті: ${date.toLocaleString()} | ${JSON.stringify(data)}\n`;

    fs.appendFile(`orders.txt`, msg, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Замовлення збережено`)
        }
    })
    res.send(data);
})

app.listen(PORT, () => {
    console.log(`Server work on port: ${PORT}`);
    opn(`http://localhost:${PORT}`);
})




