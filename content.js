
let times = document.getElementsByClassName('movie-length');
let goodtimes = document.querySelectorAll(".good .movie-length");
let time = 0;

for (let i=0; i<times.length; i++){
  const c1 = times[i].innerText.split(":");
  time = Number(c1[0])*60+Number(c1[1])+time;
  //times変数（mm:ssの文字列で渡される）を秒数の数値に変換して合計
}

let goukei = "すべての授業: "+Math.floor(time/3600)+"時間"+Math.floor((time%3600)/60)+"分"+(time%60)+"秒";

let goodtime=0;
for (let i=0; i<goodtimes.length; i++){
  const c1 = goodtimes[i].innerText.split(":");
  goodtime = Number(c1[0])*60+Number(c1[1])+goodtime;
}

let goodgoukei = "視聴済み: "+Math.floor(goodtime/3600)+"時間"+Math.floor((goodtime%3600)/60)+"分"+(goodtime%60)+"秒（" + Math.round((goodtime / time) * 100) + "%）";

let remaininggoukei="未視聴: "+Math.floor((time-goodtime)/3600)+"時間"+Math.floor(((time-goodtime)%3600)/60)+"分"+((time-goodtime)%60)+"秒";

let hyouji = document.getElementsByClassName('description');

if(hyouji === undefined){
	location.reload();
}

let movieCount = document.getElementsByClassName('movie').length;
let testCount = document.getElementsByClassName('evaluation-test').length;

hyouji[0].innerHTML="<div class='u-card'><div class='u-list-header typo-list-title'>この単元の進捗状況</div><div class='u-card-inner'>"+goukei+"<br>"+goodgoukei+"<br>"+remaininggoukei + "<br>" + "授業動画数:" + movieCount + "<br>" + "確認テストの数:" + testCount + "</div></div>"+hyouji[0].innerHTML;
//表示

