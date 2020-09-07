/*
	this와 strict 모드
	
	오브젝트.함수이름() 형태로 함수 호출
	- 글로벌 오브젝트는 오브젝트 이름이 없으므로 함수 이름만 작성하여 호출
	
	strict 모드에서는 window.book()처럼 book() 앞에 window를 글로벌 오브젝트로 작성
*/

// 1. 오브젝트 작성하지 않았을 때
function book() {
	"use strict";
	return this;
}
var result = book();
console.log(result); // undefined


// 2. window 오브젝트 작성했을 때
function book() {
	"use strict";
	return this;
}
var obj = window.book();
console.log(obj === window); // true


// 3. this 참조 오브젝트
var book = {
	point: 100,
	member: {
		point: 200,
		get: function() {
			console.log(this === book.member); // true
			console.log(this.point); // 200
		}
	}
}
book.member.get();


















