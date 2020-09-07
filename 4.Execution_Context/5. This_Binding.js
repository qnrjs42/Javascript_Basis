/*
	This 바인딩 컴포넌트
	
	목적 - this로 함수를 호출한 오브젝트의 프로퍼티에 엑세스
	this.propertyName
	
	엑세스 메커니즘
	- obj.book() 형태에서 this로 obj를 참조할 수 있도록
	this 바인딩 컴포넌트에 boj 참조를 설정
	
	obj의 프로퍼티가 변경되면 동적으로 참조
	- 설정이 아닌 참조
*/

// 1. this 바인딩
var obj = {point: 100};
obj.getPoint = function() {
	return this.point;
}
obj.getPoint();