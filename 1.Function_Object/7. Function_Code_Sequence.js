/*
	함수 코드 해석 순서

	1. 함수 선언문 해석
	- function getBook(){};
	
	
	2. 변수 초기화
	- var title = undefined;
	- var readBook = undefined;
	
	
	3. 코드 실행
	- var title = "JS책";
	- var readBook = function(){};
	- getBook();
	
	
	
	
	
	함수 선언문 해석 순서
	1. 마지막 줄 book() 함수 호출
	
	2. book() 첫 번째 줄 이동, debugger 실행 안 함
	
	3. 함수 내에서 함수 선언문 탐색
	- 위에서 아래로
	
	4. function getBook(){}이 함수 선언문이므로 function 오브젝트 생성
	
	5. 더 이상 함수 선언문 없으니 다시 함수 첫 번째 줄로 이동
	
	--------------------------------------------------
	
	변수 초기화 순서
	6. debugger는 실행이니까 패스
	
	7. var title = "JS책"
	- title 변수에 undefined 할당, "JS책" 할당하지 않음
	
	8. function getBook(){}은 초기화 했으니 넘어감
	
	9. var readBook = function(){};
	- readBook 변수에 undefined 할당
	- 함수 표현식은 변수를 선언만 함
	
	10. 더 이상 초기화할게 없으니 다시 함수 첫 번째 줄로 이동
	
	--------------------------------------------------
	
	코드 실행 순서
	11. debugger를 실행하며, 실행 멈춤
	
	12. var title = "JS책";
	- title 변수에 "JS책" 할당
	
	13. function getBook(){ return title };
	- 실행이 아닌 선언문이므로 다음 줄로 이동
	
	14. var readBook = function(){};
	- function 오브젝트를 생성하여 readBook 변수에 할당
	- readBook이 function 오브젝트가 되므로 이제 readBook 함수 호출할 수 있음
	
	15. getBook() 함수 호출
	- 위와 같은 순서로 실행
	- getBook() 함수의 함수와 변수를 초기화하고 코드 실행
	
*/

function book() {
	debugger;
	
	var title = "JS책";
	function getBook() {
		return title;
	}
	var readBook = function() {};
	getBook();
}
book();