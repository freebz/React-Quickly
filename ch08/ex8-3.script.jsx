// 예제 코드 8.3  Content를 이용해서 엘리먼트 렌더링하기

ReactDOM.render(
  <div>
    <Content>
      <h1>React</h1>
      <p>Rocks</p>
    </Content>
    <Content>
      <img src="images/azat.jpg" width="100"/>
    </Content>
    <Content>
      <a href="http://react.rocks">http://react.rocks</a>
    </Content>
    <Content>
      <a className="btn btn-danger" href="http://react.rocks">http://react.rocks</a>
    </Content>
  </div>,
  document.getElementById('content')
)