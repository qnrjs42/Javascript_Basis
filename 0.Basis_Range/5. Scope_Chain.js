/*
	ES3: scope chain
	
	스코프 체인은 실행 콘텍스트와 관련이 있으며
	식별자 해결을 위해 사용
	
	스코프 체인은 식별자를 검색하기 위한 {name: value}(object) 리스트
	
	
	함수가 호출 시 스코프 생성, 함수의 변수와 함수를 {name: value} 형태로 설정
	변수, 함수 이름: name
	변수, 함수 값: value
	
	생성한 scope를 scope chain에 연결하고 scope chaine에서 식별자를 해결
	
	
	스펙의 scope chain 사용 횟수
	ES3: 37
	ES5: 1
	ES6: 0
	
	ES5 1번은 바뀐 것을 나타내기 위해 사용
	
	이제 scope chain은 잊어버려도 된다.
	
	
*/