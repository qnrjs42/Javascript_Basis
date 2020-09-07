/*
	prototype 확장 방법
	
	- prototype에 프로퍼티를 연결하여 작성
	  - prototype.name = value 형태
	- name에 프로퍼티 이름 작성
	- value에 JS 데이터 타입 작성
	- prototype에 null을 설정하면 확장 불가
	
	

*/

// 1. constructor 연결
function Book(){};

Book.prototype = {
	constructor: Book,
	setPoint: function(){}
};
var obj = new Book();
console.log(obj.constructor); // function Book(){}