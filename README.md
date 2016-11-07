# Offline metronome

A metronome webpage that can also work completely offline. Uses [Service
Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
to cache all the page files.

## Local usage

If you want to run the metronome locally follow these steps:

1. Install Node - https://nodejs.org/en/download/
2. `git clone git@github.com:piotr-szachewicz/offline-metronome.git`
3. `cd offline-metronome`
4. `npm install`
5. `gulp`
6. open http://localhost:8080  in your browser
