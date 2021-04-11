//


// .mjsは、使わない
//import { IntClosedRange } from '../intClosedRange.mjs';

const IntClosedRange = require('../intClosedRange.js');


test('必ず成功', () => {
  expect(1).toBe(1);
});

// test('必ず失敗', () => {
//   expect(true).toBe(false);
// });

describe('整数閉区間IntClosedRange-[3,7]の場合', () => {
  let range = null;
  beforeEach(() => {
    range = new IntClosedRange(3, 7);
  });

  test('整数閉区間は下端点と上端点を持つ。[3,7]の場合', () => {
    //const range = new IntClosedRange(3, 7);
    expect(range.getLower()).toBe(3);
    expect(range.getUpper()).toBe(7);
  });

  test('整数閉区間は文字列表記を返す。[3,7]の場合', () => {
    //const range = new IntClosedRange(3, 7);
    expect(range.notation()).toBe('[3,7]');
  });



  test('整数閉区間は指定した整数を含むかどうかを返す', () => {
    //const range = new IntClosedRange(3, 7);
    expect(range.includes(5)).toBe(true);
    expect(range.includes(1)).toBe(false);
    expect(range.includes(9)).toBe(false);

    expect(range.includes(3)).toBe(true);
    expect(range.includes(7)).toBe(true);
  });
});

describe('整数閉区間IntClosedRange-[2,8]の場合', () => {
  let range = null;
  beforeEach(() => {
    range = new IntClosedRange(2, 8);
  });

  test('整数閉区間は下端点と上端点を持つ。[2,8]の場合', () => {
    //const range = new IntClosedRange(2, 8);
    expect(range.getLower()).toBe(2);
    expect(range.getUpper()).toBe(8);
  });

  test('整数閉区間は文字列表記を返す。[2,8]の場合', () => {
    //const range = new IntClosedRange(2, 8);
    expect(range.notation()).toBe('[2,8]');
  });
});