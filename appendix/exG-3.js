// 예제 코드 G.3  forwardRef.html

const ThemeContext = React.createContext('light');
// 고차 컴포넌트
function withTheme(Component) {
  function ThemedComponent({forwardedRef, ...rest}) {
    return (
      <ThemeContext.Consumer>
        {theme => (
          // 속성으로 전달받은 'forwardedRef'를 ref에 전달한다.
          <Component
            {...rest}
            ref={forwardedRef}
            theme={theme}
          />

        )}
      </ThemeContext.Consumer>
    );
  }

  // 아래에서 두 번째 인자인 ref늘 React.forwardRef가 전달한다.
  // 인자로 전달받은 ref를 일반적인 속성처럼 forwardedRef 같은 이름으로 ThemedComponent에 전달하여 사용할 수 있다.
  return React.forwardedRef((props, ref) => (
    <ThemedComponent {...props} forwardedRef={ref} />
  ));
}

class FancyButton extends React.Component {
  buttonRef = React.createRef();

  focus() {
    this.buttonRef.current.focus();
  }

  render() {
    const {label, theme, ...rest} = this.props;
    return (
      <button
        {...rest}
        className={`${theme}-button`}
        ref={this.buttonRef}>

        {label}
      </button>
    );
  }
}

const FancyThemedButton = withTheme(FancyButton);

class App extends React.Component {
  constructor(props) {
    super(props);

    // fancyButtonRef로 FancyButton을 참조할 수 있다.
    this.fancyButtonRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('ref:', this.fancyButtonRef.current);
  }

  render() {
    return (
      <FancyThemedButton
        label="Click me!"
        onClick={this.handleClick}
        ref={this.fancyButtonRef}
      />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);