/*
	호이스팅
	
	함수 앞에서 호출
	
	함수 선언문은 초기화 단계에서 function 오브젝트를 생성하므로 어디에서든 함수 호출 가능
	
	함수 앞에서 호출 가능 - 호이스팅
	
*/

// 1. 호이스팅
var result = book();
console.log(result); // 호이스팅

function book() {
	return "호이스팅";
}

// 2. 호이스팅 초기화 하지 않음
var result = book();
console.log(result);

function book() {
	return "호이스팅";
}

book = function() {
	return "함수 표현식";
}

/*
	// 2. 호이스팅 초기화 하지 않음
	
	1. 함수 선언
	- function book()
	
	2. 변수 초기화
	- book()은 이미 선언이 되었기 때문에, 할당을 하지 않는다.
	- book에 undefined 할당을 한다해도 에러가 난다.
	
	3. 코드 실행
	- 호이스팅
	
	
*/



