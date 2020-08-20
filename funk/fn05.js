// アロー関数を使った一例

const prop = false;
let fn;

if (prop) {
	fn = () => {
		return "hello";
	}
} else {
	fn = () => {
		return "bye";
	}
}

console.log(fn());
