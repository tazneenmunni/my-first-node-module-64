const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World from express js!!");
})

const users = [
    { id: 1, name: 'Sabana', phone: '01788888888' },
    { id: 2, name: 'Sabnoor', phone: '01788888888' },
    { id: 3, name: 'Popi', phone: '01788888888' },
    { id: 4, name: 'Opu', phone: '01788888888' },
    { id: 5, name: 'Sahana', phone: '01788888888' },
]

app.get('/users', (req, res) => {
    //filter by query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users);
    }
    console.log('query', req.query)
});

app.get('/users/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(users)
    res.send(user)

})

app.listen(port, () => {
    console.log('Listening to port', port);
})