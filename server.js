const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const cors = require ('cors');


const app = express();

//import routes
const postRoutes = require('./routes/posts');

//appmiddleware
app.use(bodyParser.json());
app.use(cors());

app.use(postRoutes);

const port = 8000;

const DB_URL = 'mongodb+srv://dinujaya:dinujaya123@cluster0.g59jl.mongodb.net/merncrud?retryWrites=true&w=majority';
mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=>console.log('DB Connection error',err));

app.listen(port,() =>{
    console.log(`app is running on ${port}`);
});