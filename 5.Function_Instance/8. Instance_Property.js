/*
	인스턴스 프로퍼티
	
	prototype에 연결된 프로퍼티도 인스턴스 프로퍼티가 된다
	
	
	obj.getPoint()
	- obj 인스턴스의 getPoint() 호출
	- prototype getPoint()가 아닌 인스턴스의 getPoint()가 호출 됨
	- 인스턴스에 연결한 프로퍼티를 먼저 사용하기 때문
	
	인스턴스 프로퍼티는 공유되지 않음
	
*/

// 1. 인스턴스 프로퍼티 우선 사용
function Book(point) {
	this.point = point;
}
Book.prototype.getPoint = function() {
	return 100;
}

var obj = new Book(200);

obj.getPoint = function() {
	return this.point;
}
console.log(obj.getPoint()); // 200