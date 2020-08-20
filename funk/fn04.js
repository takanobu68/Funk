// 関数宣言で定義していても使えない時の例
// 難しいからまだ気にしなくてもよい
// スコープを勉強してから説明します

function fn() {
	function sum(num1, num2) {
		return num1 + num2
	}

	function multi(num1, num2) {
		return num = num1 * num2
	}

	const sumResult = sum(1, 2);
	const multiResult = multi(1, 2);

	const total = sumResult + multiResult;

	return total;
}

// console.log(sum(1, 2)) これはエラー
// console.log(multi(1, 2)) これもエラー
console.log(fn())
