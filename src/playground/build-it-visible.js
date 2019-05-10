class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisToggle = this.handleVisToggle.bind(this);
    this.state = {
      visibility: false,
    };
  }

  handleVisToggle() {
    this.setState(prevState => ({
      visibility: !prevState.visibility,
    }));
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisToggle}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
        {this.state.visibility && (
          <div>
            <p>Some details</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));
