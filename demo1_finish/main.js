// ######################################
// ラインモーションクラス
// ######################################
class MyLine {

  constructor(el) {
    // 操作する要素
    this.el = el

    window.requestAnimationFrame(() => {
      this._update()
    })
  }

  // 毎フレーム実行される処理
  _update() {

    const txtNum = 20

    // 0から9までの値をランダムに
    let txt = '5'
    for(let i = 0; i < txtNum; i++) {
      txt += Math.floor(Math.random() * 10)
    }
    txt += '5'
    this.el.innerHTML = txt

    window.requestAnimationFrame(() => {
      this._update()
    })
  }
}



init()
function init() {
  document.querySelectorAll('.js-line').forEach((el) => {
    new MyLine(el)
  })
}



