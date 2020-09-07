/*
	실행 콘텍스트 형태
	
	1. book() 함수가 호출되면
	엔진 컨트롤이 함수 안으로 이동
	
	2. point 변수 선언
	
	3. show function object 생성, getPoint function object 생성
	
	4. show [[Scope]] 스코프 설정 ([[]] 대괄호 2개는 엔진이 설정한 프로퍼티를 뜻함)

	5. show 함수 호출
	
	6. 엔진 컨트롤이 show 함수 이동 전에 실행 콘텍스트 만듦
	
	7. 함수 실행을 위한 콘텍스트 환경을 구축
	
	8. 렉시컬 환경 컴포넌트와 변수 환경 컴포넌트는 초기값은 같음
	
	9. this 바인딩 컴포넌트 생성 ( this로 참조할 오브젝트를 바인딩 시킴 )
	
	10. var title = "JS책"; 코드 실행 전에
	렉시컬 환경 컴포넌트 in 환경 레코드 in 선언적 환경 레코드 in 프로퍼티 형태로 생성
	title: "JS책"
	
*/

// 실행 콘텍스트 형태
function book() {
	var point = 123;
	
	function show() {
		var title = "JS책";
	}
	
	function getPoint() {
		return point;
	}
	
	show();
}

book();