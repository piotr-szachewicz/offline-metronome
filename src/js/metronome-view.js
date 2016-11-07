var ReactDOM = require('react-dom');
var React = require('react');
var Metronome = require('./metronome');

module.exports = class MetronomeView extends React.Component {
  constructor() {
    super();

    this.state = {
      bpm: 90,
      switchedOn: false
    };

    this._valueChanged = this._valueChanged.bind(this)
    this._startClicked = this._startClicked.bind(this)
    this._stopClicked = this._stopClicked.bind(this)
  }

  _valueChanged(ev) {
    var value = parseInt(ev.target.value);
    this.setState({bpm: value})
  }

  _startClicked(ev) {
    this.setState({switchedOn: true});
  }

  _stopClicked(ev) {
    this.setState({switchedOn: false});
  }

  componentWillMount() {
    this.metronome = new Metronome();
    this.metronome.setBpm(this.state.bpm);
  }

  componentDidUpdate(prevProps, prevState) {
    this.metronome.stop();

    if (this.state.switchedOn) {
      this.metronome.setBpm(this.state.bpm);
      this.metronome.start();
    }
  }

  get form() {
    return <form className="form-inline text-center">
      <div className="form-group">
        <label htmlFor="bpm">BPM:</label>
        <input id="bpm" className="form-control" type='number' onChange={this._valueChanged} value={this.state.bpm} min='1' max='300'/>
      </div>
      <button type="button" className="btn btn-primary" onClick={this._startClicked}>Start</button>
      <button type="button" className="btn btn-warning" onClick={this._stopClicked}>Stop</button>
    </form>;
  }

  render() {
    return <div className="content">
      <h1>Offline metronome</h1>
      { this.form }
    </div>;
  }
}
