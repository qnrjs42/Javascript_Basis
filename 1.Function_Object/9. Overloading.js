/*
	오버로딩
	
	함수 이름은 같고, 파라미터 수 또는 값 타입에 따라 존재
	
	함수 호출 시 파라미터 수와 값 타입이 같은 함수가 호출
	
	JS는 오버로딩 지원하지 않음
	- JS는 파라미터 수와 값 타입을 구분하지 않고
	{name: value} 형태로 저장하기 때문
*/

// 1. 오버로딩 형태
function book(one){}
function book(one, two){}
function book(one, two, three){}

book(one, two);


// 2. 오버로딩 미지원 형태
function book() {
	function getBook() {
		return "책1";
	}
	
	console.log(getBook()); // 책2
	
	function getBook() {
		return "책2";
	}
}
book();