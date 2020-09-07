/*
	Constructor Property
	
	생성하는 function 오브젝트 참조
	- function 오브젝트를 생성할 때 설정
	- prototype에 연결
	
	ES5: constructor 변경 불가
	- 생성자 활용 불가능
	
	ES6: constructor 변경 가능
	- 활용성 높음
	
*/

// Book function 오브젝트: {
// 	prototype: {
// 		constructor: Book
// 	}
// }

// 1. constructor 비교
var Book = function(){};
var result = Book === Book.prototype.constructor;
console.log("1:", result); // 1: true


var obj = new Book();
console.log("2:", Book === obj.constructor); // 2: true

console.log("3:", typeof Book); // 3: function
console.log("4:", typeof obj); // 4: object




