/*
	Argument 처리 구조
	
	파라미터를 { key: value }형태로 저장
	- 파라미터 수 만큼 0부터 인덱스 부여
	- key 사용
	- 파라미터로 받은 값을 value에 설정
	- { 0: param1, 1: param2 }
	
	Array-like
	- key 값이 0부터 1씩 증가
	- length 프로퍼티가 있어야 함
	
*/

// 1. Array-like
function get() {
	return arguments;
}
console.log(get("A", "B")); // { '0': 'A', '1': 'B' }


/*
	엔진의 파라미터 처리
	
	1. get()함수 호출 시 77, 100 파라미터 값 넘겨줌
	
	2. 넘겨받은 값을 함수의 파라미터 이름에 설정
	
	3. Argument 오브젝트 생성
	
	4. 넘겨받은 파라미터 수를 Argument 오브젝트의 length 프로퍼티에 설정
	
	5. 넘겨받은 파라미터 수만큼 반복하여
	0부터 key로 하여 순서대로 파라미터 값 설정
	{0: 77}, {1: 100} 형태가 됨
	
	6. 이것을 함수 초기화 단계에서 실행
*/


// 2. 엔진의 파라미터 처리
var get = function(one) {
	return one;
}
get(77, 100);


