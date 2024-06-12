const express = require("express");
const cors = require('cors');
const connectDB = require('./config/db')
const post = require('./routes/post')
const view = require('./routes/view')
const category = require('./routes/category')
const subcategory = require('./routes/subcategory')
const app = express();
const PORT = 5000;
const corsOptions = {
    origin: "http://localhost:3000" 
}
connectDB();
app.use(cors(corsOptions))
app.use(express.json());


app.use('/view',view)
app.use('/product',post)
app.use('/category',category)
app.use('/subcategory',subcategory)

app.listen(PORT,(error)=>{
    if(!error){
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    }else{
        console.log("Error occurred, server can't start", error);
    }
});