let alltimes = document.getElementsByClassName('movie-length');
let plustimes = document.querySelectorAll('.supplement .movie-length');
let goodtimes = document.querySelectorAll(".good .movie-length");
let alltime = 0;
let plustime = 0;

//全授業時間の合計
for (let i=0; i<alltimes.length; i++){
  const all = alltimes[i].innerText.split(":");
  alltime = Number(all[0])*60+Number(all[1])+alltime;
  //times変数（mm:ssの文字列で渡される）を秒数の数値に変換して合計
}

//N_Plus授業時間の合計
for (let i=0; i<plustimes.length; i++){
  const plus = plustimes[i].innerText.split(":");
  plustime = Number(plus[0])*60+Number(plus[1])+plustime;
  //times変数（mm:ssの文字列で渡される）を秒数の数値に変換して合計
}

//必修授業時間
let time = alltime - plustime;

let goukei = "必修授業: "+Math.floor(time/3600)+"時間"+Math.floor((time%3600)/60)+"分"+(time%60)+"秒";

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

let allcount = document.getElementsByClassName('movie').length;
let pluscount = document.getElementsByClassName('movie supplement').length;

let movieCount = allcount - pluscount;

let eveluation_test = document.getElementsByClassName('evaluation-test').length;
let essay_test = document.getElementsByClassName('essay-test').length;

let testCount = eveluation_test + essay_test;

hyouji[0].innerHTML="<div class='u-card'><div class='u-list-header typo-list-title'>この単元の進捗状況</div><div class='u-card-inner'>"+goukei+"<br>"+goodgoukei+"<br>"+remaininggoukei + "<br>" + "授業動画数:" + movieCount + "<br>" + "確認テストの数:" + testCount + "</div></div>"+hyouji[0].innerHTML;
//表示