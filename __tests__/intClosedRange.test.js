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

  test('下端点getLower()は3', () => {
    //const range = new IntClosedRange(3, 7);
    expect(range.getLower()).toBe(3);
  });

  test('上端点getUpper()は7', () => {
    //const range = new IntClosedRange(3, 7);
    expect(range.getUpper()).toBe(7);
  });


  test('notation()は文字列表記"[3,7]"を返す', () => {
    //const range = new IntClosedRange(3, 7);
    expect(range.notation()).toBe('[3,7]');
  });

  // test('整数閉区間は指定した整数を含むかどうかを返す', () => {
  //   expect(range.includes(5)).toBe(true);
  //   expect(range.includes(1)).toBe(false);
  //   expect(range.includes(9)).toBe(false);

  //   expect(range.includes(3)).toBe(true);
  //   expect(range.includes(7)).toBe(true);
  // });

  test('指定した整数5を含むためincludes()はtrueを返す', () => {
    expect(range.includes(5)).toBe(true);
  });

  test('指定した整数2を含まない。includes()はfalseを返す', () => {
    expect(range.includes(2)).toBe(false);
  });

  test('指定した整数8を含まない。includes()はfalseを返す', () => {
    expect(range.includes(8)).toBe(false);
  });

  test('下端点3を含む。includes()はtrueを返す', () => {
    expect(range.includes(3)).toBe(true);
  });

  test('上端点7を含む。includes()はtrueを返す', () => {
    expect(range.includes(7)).toBe(true);
  });
});

describe('整数閉区間IntClosedRange-[2,8]の場合', () => {
  let range = null;
  beforeEach(() => {
    range = new IntClosedRange(2, 8);
  });

  test('下端点getLower()は2', () => {
    expect(range.getLower()).toBe(2);
  });

  test('上端点getUpper()は8', () => {
    expect(range.getUpper()).toBe(8);
  });

  test('notation()は文字列表記"[2,8]"を返す', () => {
    //const range = new IntClosedRange(2, 8);
    expect(range.notation()).toBe('[2,8]');
  });
});