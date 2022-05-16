import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import router from './routes/posts.js';

const app = express();


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
// app.use(express.static(__dirname));
app.use(express.json());
app.use('/posts', router);



mongoose.connect('mongodb://localhost:27017/memoriesDB')
.then(()=>{
    console.log('MongoDB Started :)')
})

.catch(()=>{
    console.log('MongoDB Connection Failed :(')
})

app.listen(9000,function(req,res){
    console.log('Server Started :)')
})

    
