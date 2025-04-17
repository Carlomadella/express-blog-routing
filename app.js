const express = require('express')
const app = express()

// importo il router dei post
const pizzasRouter = require('./routers/posts.js');


const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// utilizzo il router importato precedentemente
app.use('/pizzas', pizzasRouter)

app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${3000}`)
});

