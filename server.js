const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((request, response, next) => {
    const now = new Date().toString();
    const log = (`${now} ${request.method} ${request.url}`);
    console.log(log);
    fs.appendFile('server.log', log + '\n' , (err) =>{
        if (err){
            console.log('Unable to append to server.log.');
        }
    })
    next();
});

// app.use((request, response, next) => {
//     response.render('maintenance.hbs');
// })

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.get('/', (request, response) => {
    response.render('home.hbs', {
        pageTitle: 'This is Home Page',
        currentYear: new Date().getFullYear(),
        message: 'Welcome to the world of Web'
    });
});

app.get('/about', (request, response) => {
    response.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear(),
    });
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Something wrong with your request!'
    })
})

//Setup for heroku
const port = process.env.PORT || 3000;

// End heroku
app.listen(port,() => {
    console.log(`Server is up and on port ${port}`);
});