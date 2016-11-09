# Offline metronome

A metronome webpage that can also work completely offline. Uses [Service
Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
to cache all the page files.

## How does it work

1. Use a Chrome browser.
2. Go to the https://piotr-szachewicz.github.io/offline-metronome/ site.
3. Play around a bit.
4. Turn off your internet connection
5. Go to the page again, refresh, close and open it, etc.
6. The page still works offline!

Here's a GIF with a quick demo:

![offline-metronome-demo](https://cloud.githubusercontent.com/assets/4949616/20149937/ad16e834-a6b3-11e6-8f7d-30393646407d.gif)

## Local usage

If you want to run the metronome locally follow these steps:

1. Install Node - https://nodejs.org/en/download/
2. `git clone git@github.com:piotr-szachewicz/offline-metronome.git`
3. `cd offline-metronome`
4. `npm install`
5. `gulp`
6. open http://localhost:8080  in your browser
