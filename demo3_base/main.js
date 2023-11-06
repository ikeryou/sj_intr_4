// ######################################
// ラインモーションクラス
// ######################################
class MyLine {

  constructor(el) {
    // ホバーしてるかどうか

    // 操作する要素
    this.el = el

    // ライン要素
    this._lineEl

    this.el.addEventListener('mouseenter', () => {
      this._eRollOver()
    })
    this.el.addEventListener('mouseleave', () => {
      this._eRollOut()
    })

    window.requestAnimationFrame(() => {
      this._update()
    })
  }

  _eRollOver() {
  }

  _eRollOut() {
  }

  // 毎フレーム実行される処理
  _update() {
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



