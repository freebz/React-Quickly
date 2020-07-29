// 예제 코드 20.4  RESTful API 라우팅

mongodb.MongoClient.connect(url, function(err, db) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  app.use(compression())
  app.use(logger('dev'))
  app.use(errorHandler())
  app.use(bodyParser.json())
  app.use(validator())
  app.use(express.static('public'))
  app.engine('handlebars', exphbs())
  app.set('view engine', 'handlebars')

  app.use(function(req, res, next){
    req.rooms = db.collection('rooms')
    return next()
  })

  app.get('/rooms', function(req, res, next) {
    req.rooms
    .find({}, {sort: {_id: -1}})
    .toArray(function(err, docs){
      if (err) return next(err)
      return res.json(docs)
    })
  })
  app.post('/rooms', function(req, res, next){
    req.checkBody('name', 'Invalid name in body')
      .notEmpty()
    var errors = req.validationErrors()
    if (errors) return next(errors)
    req.rooms.insert(req.body, function (err, result) {
      if (err) return next(err)
      return res.json(result.ops[0])
    })
  })