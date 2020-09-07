/*
	스코프 목적
	- 범위를 제한하여 식별자 해결
	- 스코프에서 식별자를 해결
	
	식별자 해결이란 (Identifier Resolution)
	- 변수 이름, 함수 이름을 찾는 것
	- 이때 스코프 사용
	- 이름을 찾게 되면 값을 구할 수 있음
	- 크게는 이름을 설정하는 것도 식별자 해결
	
	스코프는 식별자 해결을 위한 것
	
	
	스코프 설정
	1. 엔진이 function book(){} 만나면
	
	2. function 오브젝트 생성
	
	3. 스코프 설정
	- 생성한 function 오브젝트의 [[Scope]]에 스코프 설정
	- 이때 스코프 결정
	
	4. JS의 스코프 설정 메커니즘
*/

// 1. 스코프 설정
function book() {
	var point = 123;
	function get() {
		console.log(point);
	}
	get();
}
book();