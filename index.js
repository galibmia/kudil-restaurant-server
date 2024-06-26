const express = require('express')

const app = express()

const port = process.env.PORT || 5000;

const chef = require('./data/chef.json');

const recipe = require('./data/recipe.json');


app.get('/', (req, res) => {
    res.send("Server is running");
});

app.get('/chef', (req, res) => {
    res.send(chef);
});

app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedId = chef.find(c => c.id === id);
    res.send(selectedId);
})

app.get('/recipe', (req, res) => {
    res.send(recipe);
})

app.get('/recipe/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedRecipe = recipe.filter(r => r.chef_id === id);
    res.send(selectedRecipe);
})

app.listen(port, () => {
    console.log(`API is running on port: ${port}`);
})