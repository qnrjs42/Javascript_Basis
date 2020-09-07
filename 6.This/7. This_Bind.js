/*
	this bind()
	
	두 번에 나누어 처리
	- function 오브젝트 생성
	- 생성한 function 오브젝트를 함수로 호출
	
	파라미터
	- 1번째 파라미터에 함수에서 this로 참조할 오브젝트
	- 2번째 파라미터에 호출된 함수의 파라미터 값
	
	생성한 function을 호출할 때에도 파라미터 작성 가능
	- 두 개의 파라미터를 병합하여 사용
*/


/*
	1. var obj = book.get.bind(book);
	- book.get()을 호출하지 않고 function 오브젝트를 생성하여 반환
	- 생성한 function 오브젝트를 생성한 오브젝트의 [[TargetFunction]]에 설정
	- 처리를 나누어서 하므로 저장 필요
	
	2. console.log(typeof obj);
	- obj 타입은 function 오브젝트
	
	3. bind()의 첫 번째 파라미터
	- get() 함수에서 this로 참조할 오브젝트 작성
	- get() 앞에 작성한 오브젝트를 this로 참조하지 않음 
	- 작성하지 않으면 undefind 설정
	- 생성한 function 오브젝트의 [[BoundThis]]에 설정
	
	4. var result = obj();
	- bind()로 생성한 function 오브젝트 호출
	- book.get() 함수 호출
	
	5. return this.point;
	- this가 [[BoundThis]] 참조
	즉, book 오브젝트를 참조하므로 123 반환
*/

// 1. function 오브젝트 생성, 호출
var book = {
	point: 123,
	get: function() {
		return this.point;
	}
};

var obj = book.get.bind(book);
console.log(typeof obj); // function
var result = obj();
console.log(result); // 123



