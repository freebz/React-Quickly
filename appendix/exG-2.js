// 예제 코드 G.2  Context.html

const { Provider, Consumer } = React.createContext('purple');

class ThemeProvider extends React.Component {
  state = {color: 'purple'};

  render() {
    return (
      <Provider value={this.state.color}>
        {this.props.children}
      </Provider>
    );
  }
}

class ThemedButton extends React.Component {
  render() {
    return (
      <Consumer>
        {color => (
          <button style={{background: color}}>
            {this.props.children}
          </button>
        )}
      </Consumer>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <ThemedButton>button</ThemedButton>
      </ThemeProvider>
    );
  }
}