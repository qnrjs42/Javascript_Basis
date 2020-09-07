/*
	즉시 실행 함수 IIFE: Immediately Invoked Function Expression
	
	함수 이름이 없으므로 함수 선언문, 함수 표현식도 아님
	문법 에러가 발생하지 않음
	무명 함수, 익명 함수라고도 함
	
	무명 함수는 그룹핑 연산자 안의 코드를 한 번만 사용할 때 사용
	주로 초깃값을 설정할 때 사용
	메모리에 저장하지 않고 한 번만 쓰고 버림
*/

// 1. 함수 즉시 실행
(function() {
	console.log("JS북");
}());


/*
	소괄호()는 그룹핑 연산자,
	1 + 2는 표현식
	
	그룹핑 연산자는 소괄호 안의 표현식을 평가하고 평가 결과를 반환
*/
// 2. 표현식 해석
var total = (1 + 2);
console.log(total);


/*
	value에 function 할당
	value 변수 선언하지 않으면 함수 이름이 없으므로 문법 에러
	
	value()처럼 function 끝에 소괄호() 첨부하면 함수로 호출
	소괄호()는 그룹핑 연산자가 아닌 함수로 호출
*/
// 3. 함수 이름 필요
var value = function() {
	return 100;
};
console.log(value()); // 100


/*
	함수가 즉시 실행 함수로
	함수에서 반환한 100을 value 변수에 할당
*/
// 4. 끝에 소괄호 작성
var value = function() {
	return 100;
}();
console.log(value); // 100


/*
	소괄호 안에 함수, 소괄호는 그룹핑 연산자
	그룹핑 연산자로 소괄호 안의 표현식을 평가
	표현식이 함수이므로 function 오브젝트 생성
	function 끝에 소괄호 있으므로 함수 실행
*/
// 5. 소괄호()에 함수 작성
var value = (function() {
	return 100;
}());
console.log(value); // 100
			
			
			
			
			