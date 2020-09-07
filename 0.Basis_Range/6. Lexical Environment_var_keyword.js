/*
	Lexical Environment
	
	정적 환경
	function 키워드를 만나면 function 오브젝트 생성
	스코르픞 Function Object의 [[Scope]]에 설정
	이것은 함수 밖의 스코프가 설정되는 것
	
	function 키워드 만나면 함수 밖의 스코프가 결정되는데
	이것이 Lexical Environment
	
	
	var 키워드 문제
	ES3에서 함수에서 var 키워드 사용하지 않고
	변수 선언 시 글로벌 오브젝트에 설정된다
	정적 환경 구조에 맞지 않음
	
	ES5 해결 방법
	- use strict 사용
	
	ES6 해결 방법
	- let, const 변수
	- 변수 자체에 스코프 제약을 둠
	
	
	
	동적 환경
	
	실행 시점에 스코프 결정
	- with문
	- eval() 함수
	
	with 문은 strict 모드에서 에러 발생
	
	eval() 함수는 보안에 문제 있음
*/

// 정적 환경
var point = 123;

function book() {
	function getPoint() {};
}
book();