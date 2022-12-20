const express = require("express")
const router = express.Router()
const {Users} = require("../models")
const bcrypt = require("bcryptjs")
const {validateToken} = require("../middlewares/AuthMiddlewares")

const {sign} = require("jsonwebtoken")

router.get("/", async (req,res) => {
    const listOfUsers = await Users.findAll();
    res.json(listOfUsers);
})

router.post("/byData", async (req,res) => {
    const data = req.body;
    const user = await Users.findOne({ where:{email: data.email}});
    res.json(user);
})

router.post("/registre", async (req,res)=>{
    const {email,password} = req.body;
    bcrypt.hash(password,10).then((hash) => {
        Users.create({
            email:email,
            password:hash
        });
        res.json("SUCCESS");
    })
})

router.post('/login', async (req,res) => {
    const {email, password} = req.body;

    const user = await Users.findOne({where:{email:email}})

    if(!user) res.json({error: "User Doesn't Exist"});
    
    bcrypt.compare(password,user.password).then((match) =>{
        if(!match) res.json({error: "Wrong Email And Password Combination"});
        const accessToken = sign({
            email:user.email , id:user.id
        },"importantsecret");
        res.json({token: accessToken, email:email, id:user.id});
    })
})

router.get("/auth", validateToken, (req, res) => {
    res.json(req.user);
});

module.exports = router
