const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('tipo', {
 
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  })
}
//DataTypes.ENUM("normal", "fighting","flying","poison","ground","rock","bug","ghost","steel","fire",
// "water","grass","electric","psychic","ice","dragon","dark","fairy","unknown","shadow",)