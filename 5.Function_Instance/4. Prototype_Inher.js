/*
	prototype 오브젝트 목적
	
	prototype 확장
	- prototype에 프로퍼티를 연결하여 prototype 확장
	- Book.prototype.getPoint = function(){}
	
	프로퍼티 공유
	- 생성한 인스턴스에서 원본 prototype의 프로퍼티 공유
	- var obj = new Book(123);
	obj.getPoint();
	
	인스턴스 상속
	- function 인스턴스를 연결하여 상속
	- Point.prototype = new Book();
	
	
	인스턴스 상속 방법
	- prototype에 연결된 프로퍼티로 인스턴스를 생성하여 상속받을 prototype에 연결
	- prototype-based 상속 이라고도 한다.
	
	JS에서 prototype은 상속보다 프로퍼티 연결이 의미가 더 큼
	- 인스턴스 연결도 프로퍼티 연결 중 하나
	
	ES5 상속은 OOP의 상속 기능 부족
	ES6의 class로 상속 사용
*/

// 1. 인스턴스 상속
function Book(title) {
	this.title = title;
}
Book.prototype.getTitle = function() {
	return this.title;
}
function Point(title) {
	Book.call(this, title);
}
Point.prototype = Object.create(Book.prototype, {}); // Book.prototype을 Point.prototype에 상속
var obj = new Point("자바스크립트");
console.log(obj.getTitle()); // 자바스크립트



// 2. ES6 Class 상속
class Book {
	constructor(title) {
		this.title = title;
	}
	getTitle() {
		return this.title;
	}
}
class Point extends Book {
	constructor(title) {
		super(title);
	}
}
const obj = new Point("자바스크립트");
console.log(obj.getTitle()); // 자바스크립트



