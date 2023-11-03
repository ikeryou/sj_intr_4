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

    let txt = '5'
    for(let i = 0; i < txtNum; i++) {
      // 中央にいくほど大きくする
      const range = map(Math.abs(i - txtNum * 0.5), 5, 0, 0, txtNum * 0.25)

      // -rangeからrangeまでの値をランダムに
      const max = range
      const min = -range
      txt += 5 + Math.floor(Math.random() * (max - min) + min)
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



