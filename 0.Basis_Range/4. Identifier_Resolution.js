/*
	식별자 해결(Identifiter Resolution)
	- 사용할 변수/함수를 결정하는 것
	- 예: point 변수
	- 신속, 정확한 검색을 위해 스코프 필요
	
	스코프에서 이름을 찾기 위해
	- 스코프에 이름을 설정
	- 값은 변경되지만, 이름은 변경되지 않음
	- 식별자 해결 대상은 이름
	
	resolution의 사전적 의미: 해결, 결정
	- 결정도 시맨틱적으로 맞음
	
	
	식별자 때문에 스코프가 있는 것
	스코프 떄문에 식별자가 있는게 아닌 것이다.
	
*/

// 1. 식별자 해결
var point = 100;

function getPoint() {
	var point = 200;
	
	return point;
}
var result = getPoint();

console.log(result); // 200


