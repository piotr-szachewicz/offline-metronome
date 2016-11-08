class Metronome {
  constructor() {
    this.clickSound = new Audio('click.mp3');
    this.worker = new Worker('js/worker.js');

    this.worker.addEventListener('message', this._playClick.bind(this));
  }

  start() {
    this.worker.postMessage({type: 'start', interval: this._intervalMs()});
  }

  stop() {
    this.worker.postMessage({type: 'stop'});
  }

  setBpm(bpm) {
    this.bpm = bpm;
  }

  _intervalMs() {
    return 60000/this.bpm;
  }

  _playClick() {
    this.clickSound.play();
  }
}

module.exports = Metronome;