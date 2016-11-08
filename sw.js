(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

self.addEventListener('install', function (event) {
  console.log('installing my first service worker');

  event.waitUntil(caches.open('online-metronome-v5').then(function (cache) {
    return cache.addAll(['/', 'click.mp3', 'css/style.css', 'css/bootstrap.min.css', 'js/index.js', 'js/worker.js']);
  }));
});

self.addEventListener('fetch', function (event) {
  console.log("fetching " + event.request.url);
  event.respondWith(caches.match(event.request).then(function (response) {
    return response || fetch(event.request);
  }));
});

},{}]},{},[1]);
