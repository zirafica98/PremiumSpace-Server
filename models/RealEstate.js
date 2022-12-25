module.exports = (sequelize, DataTypes) => {
    
    const RealEstate = sequelize.define("RealEstate",{
        tipNekretnine: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        vrstaNekretnine:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        ulica: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        broj:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        brojSoba:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        uknjizenost: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        povrsina:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        stanje:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        grejanje: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        sprat:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        cena: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        slika:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        useljivOd:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        opremljenost:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        godinaIzgradnje:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        opis:{
            type: DataTypes.TEXT,
            allowNull:true,
        },
        naslov:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        opstina: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        grad:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        drzava:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        vrstaUsluge: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        brojSpratova:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        base64:{
            type: DataTypes.STRING,
            allowNull:true
        }
    })

    return RealEstate
}
