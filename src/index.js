var ReactDOM = require('react-dom');
var React = require('react');
var MetronomeView = require('./metronome-view.js');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', {scope: './'})
  .then((reg) => {
    console.log('Registration succeeded.');
  }).catch((error) => {
    console.log('Registration failed with ' + error);
  });
}

ReactDOM.render(
  <MetronomeView/>,
  document.getElementById('app')
);
