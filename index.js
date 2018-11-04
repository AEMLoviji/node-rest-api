const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const db = require('./db')
const port = 3001;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    const data = {
        info: 'REST API created by using Node.js, Express and Postgres'
    };

    res.json(data);
})

app.get('/companies/', db.getCompanies)
app.get('/companies/:id', db.getCompanyById)
app.post('/companies', db.createCompany)
app.put('/companies/:id', db.updateCompany)
app.delete('/companies/:id', db.deleteCompany)


app.listen(port, () => {
    console.log(`REST API is running on port ${port}.`);
})