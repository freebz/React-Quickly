// 예제 코드 17.7  React 컴포넌트로 생성한 HTML의 렌더링

...
  app.set('view engine', 'hbs')
  ...
  app.get('/', (req, res, next) => {
    req.messages.find({},
      {sort: {_id: -1}}).toArray((err, docs) => {
      if (err) return next(err)
      res.render('index', {
        header: ReactDOMServer.renderToString(Header()),
        footer: ReactDOMServer.renderToString(Footer()),
        messageBoard: ReactDOMServer.renderToString(MessageBoard({
        message: docs
        })),
        props: '<script type="text/javascript">var messages='
          +JSON.stringify(docs)
          +'</script>'
      })
    })
  })