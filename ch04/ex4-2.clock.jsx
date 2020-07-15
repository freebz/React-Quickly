// 예제 코드 4.2  시계 컴포넌트 클래스의 생성자

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentTime: (new Date()).toLocaleString('en')}
  }
  ...
}