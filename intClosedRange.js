/*
* 整数閉区間 IntClosedRangクラス
* @module intClosedRange
*/

/** 整数閉区間 IntClosedRangクラス */
module.exports = class IntClosedRange {
  /**
   * @class IntClosedRang - 整数閉区間クラス
   * @param {number} lower - 下端点の値
   * @param {number} upper - 上端点の値
  */
  constructor(lower, upper) {
    this.lower = lower;
    this.upper = upper;
  }

  /**
   * 下端点の値を返す
   * @return {number} 下端点の値
  */
  getLower() {
    return this.lower;
  }

  /**
   * 上端点の値を返す 
   * @return {number} 上端点の値
  */
  getUpper() {
    return this.upper;
  }

  /**
   * 区間の文字列表記を返す 
   * @return {string} 区間の文字列表記:'[下端点,上端点]'
  */
  notation() {
    return `[${this.lower},${this.upper}]`;
  }

  /**
   * 指定した整数を含むかどうかを返す
   * @param {number} value - 判定する値
   * @return {boolean} 含むかどうか
  */
  includes(value) {
    return (this.lower <= value) && (value <= this.upper);
  }
}
