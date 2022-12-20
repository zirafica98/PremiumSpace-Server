const express = require("express")
const router = express.Router()
const {Blog} = require("../models")


router.get("/", async (req,res) => {
    const listOfBlog = await Blog.findAll();
    res.json(listOfBlog);
})

router.post("/add", async (req,res) => {
    const blog = req.body;
    const result = await Blog.create({
        title:blog.title,
        text:blog.text,
        allow:blog.allow
      });
    res.json(result);
})

router.post("/edit", async (req,res)=>{
    const data = req.body;
    const result = await Blog.update(data, {
        where: { id: data.id },
        returning: true
      });
    res.json(result);
    
})

router.post("/delete", async (req,res)=>{
    const data = req.body;
    var result;
    data.forEach(async (element)=>{
        result = await Blog.destroy({
            where:{
                id: element
            }
        })
    })
    
    res.json(result);
    
})

router.get("/byData/:id", async (req,res) => {
    const id = req.params.id
    const blog = await Blog.findOne({where:{id:id}});
    res.json(blog);
})

module.exports = router
