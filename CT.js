let start = document.getElementById("start");
let screen = document.getElementById("screen");
let alarm = document.getElementById("myaudio");

let hours = document.getElementById("count");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("second");
screen.textContent = `00:00:00`;

start.addEventListener("click", () => {
  let t1 = parseInt(hours.value, 10) || 0;
  let t2 = parseInt(minutes.value, 10) || 0;
  let t3 = parseInt(seconds.value, 10) || 0;
  console.log(t1);
  console.log(t2);
  console.log(t3);

  let ct = setInterval(() => {
    screen.textContent = `${t1}:${t2}:${t3}`;
    if (t3 > 0) {
      t3--;
    } else if (t2 > 0) {
      t2--;
      t3 = 59;
    } else if (t1 > 0) {
      t--;
      t2 = 59;
      t3 = 59;
    } else {
      clearInterval(ct);
      // window.location.reload();
      console.log("done");
      alarm.play();
    }
  }, 1000);
});

let rain_audio = document.getElementById("rain_aud");
let nature_audio = document.getElementById("bird_aud");

let rain_icon = document.getElementById("rain_icon");
let nature_icon = document.getElementById("bird_icon");

let water_icon = document.getElementById("water_icon");
let water_audio = document.getElementById("water_audio");

let wind_icon = document.getElementById("wind_icon");
let wind_audio = document.getElementById("wind_audio");

let tree_icon = document.getElementById("tree_icon");
let tree_audio = document.getElementById("tree_audio");

let audio = true;
rain_icon.addEventListener("click", () => {
  if (audio) {
    rain_audio.play();
    audio = false;
  } else {
    rain_audio.pause();
    audio = true;
    audio.currentTime = 0;
  }
});

nature_icon.addEventListener("click", () => {
  if (audio) {
    nature_audio.play();
    audio = false;
  } else {
    nature_audio.pause();
    audio = true;
    audio.currentTime = 0;
  }
});

water_icon.addEventListener("click", () => {
  if (audio) {
    water_audio.play();
    audio = false;
  } else {
    water_audio.pause();
    audio = true;
    audio.currentTime = 0;
  }
});

wind_icon.addEventListener("click", () => {
  if (audio) {
    wind_audio.play();
    audio = false;
  } else {
    wind_audio.pause();
    audio = true;
    audio.currentTime = 0;
  }
});

tree_icon.addEventListener("click", () => {
  if (audio) {
    tree_audio.play();
    audio = false;
  } else {
    tree_audio.pause();
    audio = true;
    audio.currentTime = 0;
  }
});
