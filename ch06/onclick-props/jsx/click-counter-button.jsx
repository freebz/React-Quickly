class ClickCounterButton extends React.Component {
  render() {
    return <button
      onClick={this.props.handler}
      className="btn btn-danger">
      Increase Volumn (Current volumn is {this.props.counter})
    </button>
  }
}