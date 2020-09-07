/*
	프로퍼티 공유 시점
	
	사용하는 시점에 prototype의 프로퍼티 공유
	
	prototype의 프로퍼티로 인스턴스를 생성하지만 인스턴스의 프로퍼티는 원본 prototype의 프로퍼티를 참조
	복사하여 인스턴스에 갖고 있는 개념이 아님
	
	인스턴스의 메소드를 호출 시 원본 prototype의 메소드를 호출
	
	원본 prototype에 메소드를 추가하면 생성된 모든 인스턴스에서 추가한 메소드 사용 가능
	원본 prototype의 메소드를 호출하기 때문
*/

// 1. 프로퍼티 공유 시점
function Book(){
	this.point = 100;
}
var obj = new Book();
console.log(obj,getPoint);

Book.prototype.getPoint = function() {
	return this.point;
}
var result = obj.getPoint();
console.log(result);