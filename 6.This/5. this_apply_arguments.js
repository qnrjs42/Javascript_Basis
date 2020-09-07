/*
	this와 apply()
	
	gettotal.apply(this, [10, 20])
	- call()과 비슷하지만 파라미터 값이 배열로 넘겨준다
	
	apply()는 파라미터 수가 유동적일 때 사용
	call()은 파라미터 수가 고정적일 때 사용
*/

// 1. this와 arguments
var obj = { 0: 10, 1: 20, 2: 30 };
var data = [4, 5, 6];

function get() {
	for(k = 0; k < arguments.length; k++){ 
		console.log(arguments[k] + this[k]);
	};
};
get.apply(obj, data);
// 14
// 25
// 36