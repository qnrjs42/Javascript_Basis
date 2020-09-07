/*
	this와 call()
	
	getTotal.call(this, 10, 20)
	- 10과 20을 파라미터 값으로 넘김
	- 첫 번째는 파라미터 값으로 넘어가지 않고 두 번째부터 넘어감
	
	첫 번째 파라미터에 호출된 함수에서 this로 참조할 보으젝트 작성
	this 이외에 다른 오브젝트 사용 가능
*/



/*
	get.call(this, 20);
	- this는 글로벌 오브젝트 참조
	- var vlaue 사용 가능
*/
// 1. this와 call()
"use strict";
var value = 100;
function get(param) {
	return param + this.value;
}
var result = get.call(this, 20);
console.log(result); // 120


// 2. 오브젝트 사용
var get = function(value) {
	return this.base * this.rate + value;
}
var value = { base: 20, rate: 30 };
var result = get.call(value, 50);
console.log(result); // 650


/*
	call()의 첫 번째 파라미터는 this가 오브젝트를 참조한다
	하지만 값(123) 타입에 해당하는 Number 인스턴스를 생성하고,
	123을 프르미티브 값으로 설정한다
	즉, this가 Number 인스턴스를 참조
*/
// 3. 숫자 작성
function get() {
	return this.valueOf();
};
var result = get.call(123);
console.log(result);


// 4. this 참조 변경
var book = {
	value: 123,
	point: {
		value: 456,
		get: function() {
			console.log(this.value);
		}
	}
};
book.point.get.call(book); // 123
book.point.get.call(book.point); // 456


