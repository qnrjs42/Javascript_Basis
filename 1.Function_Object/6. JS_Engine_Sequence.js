/*
	자바스크립트는 스크립팅 언어
	
	보통 스크립팅 언어는 위에서 한줄씩 해석하고 실행
	
	하지만 자바스크립트는 중간에 있는 코드가 먼저 해석될 수 있음
	
	1. 함수 선언문 순서대로 해석
	- function sports(){};
	
	2. 표현식 순서대로 해석
	- var value = 123;
	- var book = function(){};
	
	
*/

function book() {
	console.log(title); // undefined
	console.log(readBook); // undefined
	console.log(getBook); // function getBook(){ return title; }
	debugger;
	
	var title = "JS책";
	function getBook() {
		return title;
	}
	var readBook = function() {};
	getBook();
}
book();