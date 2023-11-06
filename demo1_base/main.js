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

    // 0から9までの値をランダムに


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



