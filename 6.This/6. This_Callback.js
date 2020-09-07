/*
	this와 콜백 함수
	
	ES5의 map(), forEach()처럼 콜백 함수가 있는 메소드는
	두 번째 파라미터에 this로 참조할 오브젝트를 작성
*/


// 1. 콜백 함수에서 this 사용
var obj = { value: 100 };
var data = [5, 6, 7];

function callback(element, index, data) {
	return element + this.value;
}

function get(data) {
	return data.map(callback, obj);
}
var result = get(data);
console.log(result); // [105, 106, 107]