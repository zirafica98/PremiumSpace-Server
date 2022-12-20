
const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 3001;

const db = require("./models")
app.use(express.json());
app.use(cors())

//Routers

const userRouter = require('./routes/Users')
app.use("/auth",userRouter);

const realEstateRouter = require('./routes/RealEstate')
app.use("/realEstate",realEstateRouter);

const blogRouter = require('./routes/Blog')
app.use("/blog",blogRouter);

const mailRouter = require('./routes/Mail')
app.use("/mail",mailRouter);

db.sequelize.sync().then(()=>{
    app.listen(process.env.PORT || PORT,()=>{
        console.log("Server running on port" +PORT);
    })
})
