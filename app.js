var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var carrerasRouter = require('./routes/carreras');
var materiasRouter = require('./routes/materias');
var alumnosRouter = require('./routes/alumnos');
var profesoresRouter = require('./routes/profesores');
var aulasRouter = require('./routes/aulas');
var institutosRouter = require('./routes/institutos');
const alumno = require('./models/alumno');
 
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/mat', materiasRouter);
app.use('/car', carrerasRouter);
app.use('/aul', aulasRouter);
app.use('/alum', alumnosRouter);
app.use('/prof', profesoresRouter);
app.use('/inst', institutosRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.use(express.json());

app.post('./routes/alumnos', async(req,res)=>{
  await alumnosRouter.create(req.body)
  res.send("success")
})

router.get('./routes/alumnos', async(req,res) => {
  const pageAsNumber = Number.parseInt(req.query.page);
  const sizeAsNumber = Number.parseInt(req.query.size);
  const {page,size} = req.querry;

  let page = 0;
  if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
    page = pageAsNumber;
  }

  let size = 10;
  if(!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && size < 10){
    size = sizeAsNumber
  }

  const alumnos = await models.alumno.findAndCountAll({
    limit:size,
    offset:page * size
  })
  res.send(
    content = alumnos.row,
    totalPages = Math.ceil(alumnos.count / size)
  )
})


app.get('./routes/alumnos',async(req,res)=>{
  const id = req.params.id;
  const alumno = await alumnosRouter.findOne({where:{id: id}});
  res.send(alumno)
})

app.put('./routes/alumnos', async(req,res)=>{
  const id = req.params.id;
  const alumno = await alumnosRouter.findOne({where:{id: id}});
  alumno.dni = req.body.dni
  await alumno.save();
  res.send('updated')
})

app.delete('./routes/alumnos', async(req, res)=>{
  const id = req.params.id;
  await alumnosRouter.destroy({where:{id: id}});
  res.send("removed")
})

module.exports = app; 
