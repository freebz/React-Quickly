// 예제 코드 20.5  서버 측 React

app.get('/', function(req, res, next){
  var url = 'http://localhost:3000/rooms'
  req.rooms.find({}, {sort: {_id: -1}}).toArray(function(err, rooms){
    if (err) return next(err)
    res.render('index', {
      autocomplete: ReactDOMServer.renderToString(Autocomplete({
        options: rooms,
        url: url
      })),
      data: `<script type="text/javascript">
              window.__autocomplete_data = {
                rooms: ${JSON.stringify(rooms, null, 2)},
                url: "${url}"
              }
            </script>`
    })
  })
})