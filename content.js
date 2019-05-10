var times = document.getElementsByClassName('movie-length');
var goodtimes = document.querySelectorAll(".good .movie-length");
var time = 0;
for (var i=0; i<times.length; i++){
  time = Number(times[i].innerText.substr(0,2))*60+Number(times[i].innerText.substr(-2))+time;
}
var goukei = "すべての授業: "+Math.floor(time/3600)+"時間"+Math.floor((time%3600)/60)+"分"+(time%60)+"秒";

var goodtime=0;
for (var i=0; i<goodtimes.length; i++){
  goodtime = Number(goodtimes[i].innerText.substr(0,2))*60+Number(goodtimes[i].innerText.substr(-2))+goodtime;
}
var goodgoukei = "視聴済み: "+Math.floor(goodtime/3600)+"時間"+Math.floor((goodtime%3600)/60)+"分"+(goodtime%60)+"秒";

var remaininggoukei="未視聴: "+Math.floor((time-goodtime)/3600)+"時間"+Math.floor(((time-goodtime)%3600)/60)+"分"+((time-goodtime)%60)+"秒";

var hyouji = document.getElementsByClassName('description');
if(hyouji === undefined){
	location.reload();
}
hyouji[0].innerHTML="<div class='u-card'><div class='u-list-header typo-list-title'>この単元の進捗状況</div><div class='u-card-inner'>"+goukei+"<br>"+goodgoukei+"<br>"+remaininggoukei+"</div></div>"+hyouji[0].innerHTML;
