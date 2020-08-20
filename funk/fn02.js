// 関数の定義方法
// 覚えておくべき3つの方法
// 下記は実行すると全て同じ動きをする

// 1.functionから始める関数宣言
function sum(num1, num2) {
	return num1 + num2
}

// 2.関数を値として変数へ代入する関数式
const sumA = function (num1, num2) {
	return num1 + num2
}

// 3.アロー関数を使った関数式
const sumB = (num1, num2) => {
	return num1 + num2
}

// アロー関数に関しては省略記法も覚えておく
// 1.引数が1つの場合引数を囲む()を省略できる
//	引数が0または2つ以上の場合は()の省略は不可

const fn1 = x => {
	return x
}

// 2.処理が一つの式であるとき
// 	returnと{}を省略できる
const fn2 = (x, y) => x + y;

