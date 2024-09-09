import express from 'express';
const app = express();
import mongoose from 'mongoose';
import path from 'path';


app.use(express.json())

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', ( req, res ) => {
      res.send('Hello NODE API');
})

app.get('/Jobs', (req, res) => {
      res.send('this is the jobs page')
})


mongoose.connect('mongodb+srv://WebDevEdd:password123456@cluster0.tpckn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
      console.log('connected to MongoDB');
      app.listen(8080, () => {
            console.log('NODE API app is running on port 8080');
      })
}).catch((error) => {
      console.log(error);
})