// ######################################
// ラインモーションクラス
// ######################################
class MyLine {

  constructor(el) {
    // ホバーしてるかどうか
    this.isHover = false

    // 操作する要素
    this.el = el

    const txt = this.el.innerHTML

    this.el.innerHTML = ''
    const txtEl = document.createElement('span')
    txtEl.classList.add('js-line-txt')
    this.el.appendChild(txtEl)
    txtEl.innerHTML = txt

    const lineEl = document.createElement('span')
    lineEl.classList.add('js-line-line')
    this.el.appendChild(lineEl)

    // ライン要素
    this._lineEl = lineEl
    this._lineEl.innerHTML = '66666'

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
    this.isHover = true
  }

  _eRollOut() {
    this.isHover = false
  }

  // 毎フレーム実行される処理
  _update() {
    if(this.isHover) {
      const txtNum = 50

      let txt = ''
      for(let i = 0; i < txtNum; i++) {
        // 中央にいくほど大きくする
        const range = map(Math.abs(i - txtNum * 0.5), 5, 0, 0, txtNum * 0.25)
  
        // -rangeからrangeまでの値をランダムに
        const max = range
        const min = -range
        txt += Math.floor(Math.random() * 10)
      }
      txt += ''
      this._lineEl.innerHTML = txt
    }

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



