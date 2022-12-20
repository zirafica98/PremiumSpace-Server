module.exports = (sequelize, DataTypes) => {
    
    const Blog = sequelize.define("Blog",{
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        allow:{
            type: DataTypes.STRING,
            allowNull:false,
        }
    })

    return Blog
}
