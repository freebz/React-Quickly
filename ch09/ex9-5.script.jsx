// 예제 코드 9.5  JSX로 작성한 Menu 컴포넌트

class Menu extends React.Component {
  render() {
    let menus = ['Home',
      'Abount',
      'Services',
      'Portfolio',
      'Contact us']
    return <div>
      {menus.map((v, i) => {
        return <div key={i}><Link label={v}/></div>
      })}
    </div>
  }
}