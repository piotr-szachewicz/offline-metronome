var ReactDOM = require('react-dom');
var React = require('react');
var Metronome = require('./metronome');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      bpm: 90,
      switchedOn: false
    };
  },

  valueChanged: function(ev) {
    var value = parseInt(ev.target.value);
    this.setState({bpm: value})
  },

  startClicked: function(ev) {
    this.setState({switchedOn: true});
  },

  stopClicked: function(ev) {
    this.setState({switchedOn: false});
  },

  componentWillMount() {
    this.metronome = new Metronome();
    this.metronome.setBpm(this.state.bpm);
  },

  componentDidUpdate(prevProps, prevState) {
    this.metronome.stop();

    if (this.state.switchedOn) {
      this.metronome.setBpm(this.state.bpm);
      this.metronome.start();
    }
  },

  render: function() {
    return <form className="form-inline text-center">
      <div className="form-group">
        <label for="bpm">BPM:</label>
        <input id="bpm" className="form-control" type='number' onChange={this.valueChanged} value={this.state.bpm} min='1' max='300'/>
      </div>
      <button type="button" className="btn btn-primary" onClick={this.startClicked}>Start</button>
      <button type="button" className="btn btn-warning" onClick={this.stopClicked}>Stop</button>
    </form>;
  }
});