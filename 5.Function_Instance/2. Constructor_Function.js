/*
	Constructor Function
	
	new Book(), Book()
	- 생성자 함수
	
	new 연산자
	- 인스턴스 생성을 제어
	- 생성자 함수 호출
	
	생성자 함수
	- 인스턴스 생성, 반환
	- 인스턴스에 초깃값 설정
	
	코딩 관례로 생성자 함수의 첫 문자는 대문자
	- new Number(), new Array(), new Book()
	
*/

// 1. 생성자 함수 실행 과정
function Book(point) {
	this.point = point;
}
Book.prototype.getPoint = function() {
	return this.point;
}
var obj = new Book(10);



