import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const currentTime = 'videoplayer-current-time';
const player = new Player('vimeo-player');

player.on('timeupdate', throttle(onCurrentTime, 1000));

onSetCurrentTime();

// function onCurrentTime({ seconds }) {
//   localStorage.setItem(currentTime, seconds);
// }

player.getCurrentTime().then(function(seconds) {
  localStorage.setItem(currentTime, seconds);
  console.log(seconds)
}).catch(function(error) {
    console.log("error")
});

function onSetCurrentTime() {
  if (!localStorage.getItem(currentTime)) {
    return;
  }

  player.setCurrentTime(localStorage.getItem(currentTime));
}
