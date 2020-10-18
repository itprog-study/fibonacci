'use strict';
const memo = new Map();
// n=0とn=1はきまっているものなので最初から入れておく
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
    // メモにデータがあればそれを使う
    if (memo.has(n)) {
        return memo.get(n);
    }
    // メモにデータがないので計算する
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
for (let i = 0;  i <= 40; i++) {
    console.log(i + "のフィボナッチ数列は" + fib(i) + "です。");
}