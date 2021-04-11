//
// .mjsは、テストファイルとしてみなされない
//

import { IntClosedRange } from '../intClosedRange.mjs';

test('必ず成功', () => {
  expect(1).toBe(1);
});

// test('必ず失敗', () => {
//   expect(true).toBe(false);
// });


test('整数閉区間は下端点と上端点を持つ', () => {
  const range = new IntClosedRange();
  expect(range.lower()).toBe(3);
});
