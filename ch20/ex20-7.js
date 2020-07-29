// 예제 코드 20.7  Express 앱에서 브라우저 React를 위해 데이터를 렌더링한다

res.render('index', {
  // ...
  data: `<script type="text/javascript">
          window.__autocomplete_data = {
            rooms: ${JSON.stringify(rooms, null, 2)},
            url: "${url}"
          }
        </script>`