// 関数宣言と関数式での定義による違い

// 関数宣言で定義した場合は
// コードをコンパイルするタイミングで、
// 関数をPCが記録してくれているので
// どこからでも呼び出すことができる(厳密にはそうではないが...)

/*----------------------------------------
※どちらもエラーを出さずに結果が返ってくる

console.log(sum(1, 2));

function sum(num1, num2) {
	return num1 + num2;
}

console.log(sum(1, 2));

------------------------------------------*/

// 関数式で定義した場合
// 変数に代入された時に使えるようになる

/*------------------------------------------
// console.log(sum(1, 2)); ここがエラーとなる

const sum = function(num1, num2) {
	return num1 + num2;
}

console.log(sum(1, 2));
-------------------------------------------*/

// ES2015から使用可能になった
// アロー関数は関数式での定義になるので
// 使う場所よりも前に定義しないと使用不可になる

