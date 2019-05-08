Number.prototype.secToTime = function() {
	const h = (this / 3600) >> 0;
	const m = (this % 3600 / 60) >> 0;
	const s = this % 60;

	return `${h}時間${m}分${s}秒`;
}

String.prototype.toSec = function() {
  return this.split(':').reduce((x, y) => x * 60 + (y >> 0));
}

Array.prototype.sum = function() {
	return this.reduce((x, y) => x + y);
}

// total: 全時間, end: 再生済み
const time = {
	total: null,
	end: null,
  
  update: () => {
    time.total = [...document.getElementsByClassName('movie-length')].map(dom => dom.innerText.toSec()).sum();
    time.end = [...document.getElementsByClassName('good')].map(dom => dom.innerText.match(/(\d+:\d+)$/)[0].toSec()).sum();
  }
};

const output = document.getElementsByClassName('description')[0];
const description = output.innerHTML;

const display = () => {
  output.innerHTML = `
    <div class='u-card'>
      <div class='u-list-header typo-list-title'>この単元の進捗状況</div>
        <div class='u-card-inner'>
          <p>合計時間 : ${time.total.secToTime()}</p>
          <p>終了時間 : ${time.end.secToTime()}</p>
          <p>残り時間 : ${(time.total - time.end).secToTime()}</p>
        </div>
      </div>
    </div>
    ${description}
	`;
};

const main = () => {
  time.update();
  display();

  requestAnimationFrame(main);
};

main();
