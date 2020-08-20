/*------------------------------------------

// 関数の宣言方法
// 理屈は考えずに形を覚える
// 何千回も書くのでイヤでも体が覚えます・・・

// function 関数名(仮引数1, 仮引数2) {
// 	関数を呼び出したときの処理を書く範囲
// 	return 関数の返り値
// }

// 関数の呼び出し
// 関数名(引数1,引数2)

// 最初は仮引数の使い方に悩むと思いますが
// 定義した関数内で使える変数だと考えるとよい

--------------------------------------------*/

// 作成例
// 引数として渡した数字を足した結果を返す関数

function sum(num1, num2) {
	return num1 + num2;
}

console.log(sum(1, 2));

// 処理の手順

// 1.sumという名前で定義した関数を呼び出す(実行する)
// この際sumの後の()に1.2という引数を指定
// num1に1が、num2に2が代入されるイメージを持つ
// ※下記イメージ例
// function sum(num1 = 1, num2 = 2) {
// 	return num1 + num2
// }

// 2.引数で渡されたものを実行文に代入する
// ※下記イメージ例
// function sum(1,2){
// return 1 + 2
// }

// 3.1+2が計算された結果がreturnで返される

// ※教材でよくある例だけれど、
// 関数の中でconsole.log()を使うのはやめたほうがいい
// ↓ このような方法
function sum(num1, num2) {
	console.log(num1 + num2);
}

// なるべくreturnを使って結果を返すという
// 練習をしたほうがいい
// 理由としてconsole.log()を使用してreturnを使っていない場合
// 関数を実行しても結果が返ってこない(undefinedとなる)
// 例えば
// function sumA(num1, num2) {
// 	console.log(num1 + num2);
// }

// function sumB(num3, num4) {
// 	console.log(num3, num4)
// }

// const resultA = sumA(1, 2)
// const resultB = sumA(3, 4)
// const total = resultA + resultB;
// console.log(total) // この場合結果は10とならずNaNとなる

function sumA(num1, num2) {
	return num1 + num2;
}

function sumB(num3, num4) {
	return num3, num4;
}

const resultA = sumA(1, 2)
const resultB = sumA(3, 4)
const total = resultA + resultB;
console.log(total) // この場合結果は10となる

// 問題を出していた時に
// このreturnで返して実行結果を得るとい過程が
// 苦手な人が多かったので注意するとよい。
