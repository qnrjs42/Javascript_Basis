/*
	this
	
	obj.name() 형태로 호출한 함수에서 this로 인스턴스를 참조
	
	실행 콘텍스트의 this 바인딩 컴포넌트에 바인딩
	
	글로벌 오브젝트 this는 글로벌 오브젝트 참조
	
	this와 window 오브젝트
*/

// 1. this와 window
console.log(this === window); // true


/*
	var value는 글로벌 변수
	this.value는 글로벌 변수 사용
*/
// 2. this로 글로벌 변수 엑세스
var value = 100;
console.log(this.value); // 100



/*
	window.value
	window가 글로벌 오브젝트를 참조하므로
	window.value 형태로 글로벌 변수 사용
*/
// 3. window로 글로벌 변수 엑세스
var value = 100;
console.log(window.value); // 100


/*
	this가 글로벌 오브젝트 참조
	window가 글로벌 오브젝트 참조
	그래서 value 사용 가능
	
	window 오브젝트와 같이 다른 오브젝트를 마치 내것처럼 사용하는 개념을 Host 오브젝트라고 함
	DOM 오브젝트도 Host 오브젝트
*/
// 4. this로 값 할당
this.value = 100;
console.log(window.value); // 100



// 5. this와 window
window.onload = function() {
	console.log(this === window); // true
}


/*
	this.value
	- 여기서 this는 window 오브젝트를 참조
	- value는 onload 함수의 지역 변수
*/
// 6. this로 지역 변수 엑세스
window.onload = function() {
	var value = 100;
	console.log(this.value); // undefined
}


/*
	this.value 
	- 여기서 this는 window 오브젝트를 참조
	
	window.value
	- window 오브젝트의 value 
*/
// 7. this로 값 할당
window.onload = function() {
	this.value = 100;
	console.log(window.value) // 100
}


