var times = document.getElementsByClassName('movie-length');//全ての再生時間（movie-lengthというcssクラス）をページのHTMLから取得
var goodtimes = document.querySelectorAll(".good .movie-length");//視聴済み（goodというcssクラスがついている）の再生時間を取得。
var time = 0;
for (var i=0; i<times.length; i++){
  time = Number(times[i].innerText.substr(0,2))*60+Number(times[i].innerText.substr(-2))+time;
  //times変数（mm:ssの文字列で渡される）を秒数の数値に変換して合計
}
var goukei = "すべての授業: "+Math.floor(time/3600)+"時間"+Math.floor((time%3600)/60)+"分"+(time%60)+"秒";
//time変数を見やすく

var goodtime=0;
for (var i=0; i<goodtimes.length; i++){
  goodtime = Number(goodtimes[i].innerText.substr(0,2))*60+Number(goodtimes[i].innerText.substr(-2))+goodtime;
  //time変数と同様、goodtimesに入ってる文字列を数値に変換
}
var goodgoukei = "視聴済み: "+Math.floor(goodtime/3600)+"時間"+Math.floor((goodtime%3600)/60)+"分"+(goodtime%60)+"秒";
//goukei変数と同様

var remaininggoukei="未視聴: "+Math.floor((time-goodtime)/3600)+"時間"+Math.floor(((time-goodtime)%3600)/60)+"分"+((time-goodtime)%60)+"秒";
//timeとgoodtimeの差を見やすく

var hyouji = document.getElementsByClassName('description');
hyouji[0].innerHTML="<div class='u-card'><div class='u-list-header typo-list-title'>この単元の進捗状況</div><div class='u-card-inner'>"+goukei+"<br>"+goodgoukei+"<br>"+remaininggoukei+"</div></div>"+hyouji[0].innerHTML;
//表示
