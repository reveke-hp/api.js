const carreras = require('./migrations/carreras');
const materias = require('./migrations/materias');
const alumnos = require('./migrations/alumnos');
const profesores = require('./migrations/profesores');
const aulas= require('./migrations/aulas');
const institutos = require('./migrations/institutos');

alumnos.belongsTo(carreras,{foreignKey: "id_carrera"})
carreras.hasMany(alumnos,{foreignKey: "id_carrera"})

module.exports = {
    carreras,
    materias,
    alumnos,
    profesores,
    aulas,
    instutitos

}

 