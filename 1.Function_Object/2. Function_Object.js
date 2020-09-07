/*
	function 오브젝트 생성 과정
	
	1. function sports(){} 형태에서 function 키워드 만나면
	
	
	2. function 오브젝트 생성하고 저장
	{sports: {}}
	sports는 function 오브젝트 이름
	오브젝트{...}에 프로퍼티가 없는 상태
	
	그 다음 빈 오브젝트를 채움
	
	
	3. sports 오브젝트에 prototype 오브젝트 첨부
	
	
	4. prototype에 constructor 프로퍼티 첨부
	- prototype.constructor가 sports 오브젝트 참조
	
	
	5. prototype에 __proto__오브젝트 첨부
	- ES5 스펙에 __proto__가 기술되어 있지 않으며 ES6 스펙에 기술
	
	
	6. 빌트인 Object.prototype의 메소드로 
	- Object 인스턴스 생성
	- prototype.__proto__에 첨부
	
	
	7. sports 오브젝트에 __proto__오브젝트 첨부
	- sports.__proto__구조가 된다.
	
	
	8. 빌트인 Function.prototype의 메소드로
	- function 인스턴스 생성해
	- sports.__proto__에 첨부
	
	
	9. sports 오브젝트 프로퍼티에 초기값 설정
	- arguments, caller, length, name 프로퍼티
	
	
	
	
*/