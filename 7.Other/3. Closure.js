/*
	클로저(Closure) 논리
	
	function 오브젝트 생성 시 함수가 속한 스코프를 [[Scope]]에 설정하고
	함수 호출 시 [[Scope]]의 프로퍼티를 사용하는 메커니즘
	
	[[Scope]]의 설정과 사용 방법을 이해하면 클로저는 단지 논리적인 설명
	
*/

// 1. 클로적 논리 전개
function book() {
	var point = 100;
	var getPoint = function(param) {
		point += param;
		return point;
	}
	return getPoint;
}
var obj = book();
console.log(obj(200)); // 300