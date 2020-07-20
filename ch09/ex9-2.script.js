// 예제 코드 9.2  map() 메서드를 이용해서 링크를 렌더링하는 Menu 컴포넌트

class Menu extends React.Component {
  render() {
    let menus = [
      'Home',
      'Abount',
      'Services',
      'Portfolio',
      'Contact us']
    return React.createElement('div',
      null,
      menus.map((v, i) => {
        return React.createElement(
        'div',
        { key: i },
        React.createElement(Link, { label: v })
        )
      })
    )
  }
}