const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
var mongoose=require('mongoose');
mongoose.set("useUnifiedTopology",true);

var mongoDB='mongodb+srv://test:'+process.env.MONGO_ATLAS_PW+'@cluster0.rs8g5.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(mongoDB,{
	useNewUrlParser:true});
const userRoutes=require('./routes/user');



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization");
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});
app.use('/user',userRoutes);

app.use((req,res,next)=>{
    const error=new Error('Not found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    })
});

module.exports=app;