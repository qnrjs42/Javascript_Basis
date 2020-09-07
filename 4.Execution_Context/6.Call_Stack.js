/*
	호출 스택
	
	call stack
	- 실행 콘텍스트의 논리적 구조
	
	First In Last Out 순서
	- 함수 호출 시 스택 가장 위에 실행 콘텍스트가 위치
	- 다시 함수 안에서 함수 호출 시, 호출된 함수의 실행 콘텍스트가 스택의 가장 위에 위치
	- 함수 종료 시 스택에서 빠져 나옴
	
*/

// 1. call stack
function one() {
	two();
	console.log(1);
}
function two() {
	three();
	console.log(2);
}
function three() {
	console.log(3);
}
console.log(one);
// 3
// 2
// 1

