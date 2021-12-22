// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const currentTime = 'videoplayer-current-time';
// const player = new Player('vimeo-player');

// player.on('timeupdate', throttle(onCurrentTime, 1000));

// onSetCurrentTime();

// // function onCurrentTime({ seconds }) {
// //   localStorage.setItem(currentTime, seconds);
// // }

// player.getCurrentTime().then(function(seconds) {
//   localStorage.setItem(currentTime, seconds);
//   console.log(seconds)
// }).catch(function(error) {
//     console.log("error")
// });

// function onSetCurrentTime() {
//   if (!localStorage.getItem(currentTime)) {
//     return;
//   }

//   player.setCurrentTime(localStorage.getItem(currentTime));
// }

import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe, {
  id: 19231868,
  width: 1200,
});

const timeNeed = localStorage.getItem('time');
if (timeNeed) {
  onLoadTime();
}
player.on('timeupdate', throttle(timeTrottle, 1000));

function timeTrottle() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      // seconds = the current playback position
      const timeJson = JSON.stringify(seconds);
      console.log(timeJson);
      localStorage.setItem('time', timeJson);
    })
    .catch(function (error) {
      console.log('Error currentTime function');
    });
}

function onLoadTime() {
  console.log(JSON.parse(timeNeed));
  player.setCurrentTime(JSON.parse(timeNeed));
}