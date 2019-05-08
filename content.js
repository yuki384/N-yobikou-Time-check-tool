var times = document.getElementsByClassName('movie-length');
var goodtimes = document.querySelectorAll(".good .movie-length");
var time = 0;
for (var i=0; i<times.length; i++){
  time = Number(times[i].innerText.substr(0,2))*60+Number(times[i].innerText.substr(-2))+time;
}
console.log("合計"+Math.floor(time/3600)+"時間"+Math.floor((time%3600)/60)+"分"+(time%60)+"秒");

var goodtime=0;
for (var i=0; i<goodtimes.length; i++){
  goodtime = Number(goodtimes[i].innerText.substr(0,2))*60+Number(goodtimes[i].innerText.substr(-2))+goodtime;
}
console.log("見終わった授業:"+Math.floor(goodtime/3600)+"時間"+Math.floor((goodtime%3600)/60)+"分"+(goodtime%60)+"秒");

console.log("残りの授業時間:"+Math.floor((time-goodtime)/3600)+"時間"+Math.floor(((time-goodtime)%3600)/60)+"分"+((time-goodtime)%60)+"秒");
