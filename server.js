const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const path = require('path');


app.use(express.json())

app.use(express.static(path.join(__dirname, 'src')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', ( req, res ) => {
      res.send('Hello NODE API');
})

app.get('/Jobs', (req, res) => {
      res.render('jobs', { title: 'Jobs Page' });
})


mongoose.connect('mongodb+srv://WebDevEdd:password123456@cluster0.tpckn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
      console.log('connected to MongoDB');
      app.listen(3000, () => {
            console.log('NODE API app is running on port 8080');
      })
}).catch((error) => {
      console.log(error);
})