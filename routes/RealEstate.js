const express = require("express")
const router = express.Router()
const {RealEstate} = require("../models")
const Op = require('sequelize').Op
const Sequelize = require('sequelize');
const {QueryTypes} = require('sequelize');

const sequelize = new Sequelize("premiums_db","premiums","6ohe)!VBAE7h10",{
    host: "37.48.121.26",
    dialect: 'mysql'
});


router.get("/", async (req,res) => {
    const realEstate = await RealEstate.findAll();
    res.json(realEstate);
})

router.get("/byData/:id", async (req,res) => {
    const id = req.params.id
    const realEstate = await RealEstate.findOne({where:{id:id}});
    res.json(realEstate);
})

router.get("/last6", async (req,res) => {
    const realEstate = await RealEstate.findAll({limit: 6 ,attributes:["id","vrstaUsluge","naslov","opstina","opis","brojSoba","povrsina","base64"], createdAt:['createdAt', 'DESC']});
    res.json(realEstate);
})

router.post("/byData", async (req,res) => {

    const data = req.body;
    const searchWord =data.searchWord;
    const type = data.type;
    const typeSerice=data.typeService;

    if(searchWord!=""){
        realEstate = await RealEstate.findAll({attributes:["id","vrstaUsluge","naslov","opstina","opis","brojSoba","povrsina","base64"], where:{tipNekretnine: type , [Op.or]:{ulica: searchWord , grad: searchWord,  opstina: searchWord, drzava: searchWord}, [Op.and]:{vrstaUsluge:typeSerice}}});
    }else{
        realEstate = await RealEstate.findAll({ attributes:["id","vrstaUsluge","naslov","opstina","opis","brojSoba","povrsina","base64"],where:{tipNekretnine: type ,[Op.and]:{vrstaUsluge:typeSerice}}});
    }
    res.json(realEstate);
})

router.post("/", async (req,res)=>{
    const realEstate = req.body;
    await RealEstate.create(realEstate)
    res.json(realEstate);
})

router.post("/edit", async (req,res)=>{
    const realEstate = req.body;
    const result = await RealEstate.update(realEstate, {
        where: { id: parseInt(realEstate.id) },
        returning: true
      });
    res.json(result);
    
})
router.post("/delete", async (req,res)=>{
    const realEstate = req.body;
    var result;
    realEstate.forEach(async (element)=>{
        result = await RealEstate.destroy({
            where:{
                id: element
            }
        })
    })
    
    res.json(result);
    
})
router.post("/add", async (req,res)=>{
    const realEstate = req.body;
    const result = await RealEstate.create({
        tipNekretnine:realEstate.tipNekretnine,
        ulica:realEstate.ulica,
        broj:realEstate.broj,
        brojSoba:realEstate.brojSoba,
        uknjizenost:realEstate.uknjizenost,
        povrsina: realEstate.povrsina,
        stanje:realEstate.stanje,
        grejanje:realEstate.grejanje,
        sprat:realEstate.sprat,
        cena:realEstate.cena,
        opremljenost:realEstate.opremljenost,
        opis:realEstate.opis,
        naslov:realEstate.naslov,
        opstina:realEstate.opstina,
        grad:realEstate.grad,
        drzava:realEstate.drzava,
        vrstaUsluge:realEstate.vrstaUsluge,
        brojSpratova:realEstate.brojSpratova,
        slika:realEstate.slika,
        base64:realEstate.base64
      });
    res.json(result);
    
})

router.get("/nextId", async(req,res) => {
    // // const result = await sequelize.query("SELECT max(id) FROM realestates",{type: QueryTypes.SELECT});
    // // res.json(result);
    // const realEstate = await RealEstate.findAll({attributes:['id'], order:['createdAt', 'DESC']});
    // //const obj = JSON.parse(realEstate);
    // res.json(realEstate);

    //ZAVRSAVA POSAO
    // const realEstate = await RealEstate.findAll({attributes:["id"] ,createdAt:['createdAt', 'DESC']});
    // res.json(realEstate);

    const realEstate = await RealEstate.findAll({attributes:["id"] ,id:['id', 'DESC']});
    res.json(realEstate);

})
module.exports = router
