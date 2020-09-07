/*
	this와 인스턴스
	
	인스턴스 목적: 인스턴스마다 고유 값 유지
	
	인스턴스에 this의 목적: this로 인스턴스를 참조하여 this.name 형태로 프로퍼티에 접근
*/


// 1. this와 인스턴스
var book = {};
book.Point = function(point) {
	this.point = point;
};
book.Point.prototype.getPoint = function() {
	console.log(this.point); // 100
}
var obj = new book.Point(100);
obj.getPoint();

