/*
	Function Instance
	
	
*/

// 1. function 인스턴스 생성
function Book(point) {
	this.point = point;
}
Book.prototype.getPoint = function() {
	return this.point + 200;
}
var obj = new Book(100);
console.log(obj.point); // 100
console.log(obj.getPoint()); // 300