/*
	렉시컬 환경 컴포넌트
	- 함수와 변수의 식별자 해결을 위한 환경 설정
	- 함수 초기화 단계에서 해석한 함수와 변수를 { name: value }형태로 저장
	- 이름으로 함수와 변수를 검색
	- 함수 밖의 함수와 변수 참조 환경 설정
	- 함수 밖의 함수와 변수를 사용할 수 있게 됨
	
	렉시컬 환경 컴포넌트 구성
	
	렉시컬 환경 컴포넌트 생성
	- function, with, try-catch에서 생성
	
	컴포넌트 구성
	환경 레코드 - ER
	외부 렉시컬 환경 참조 - OLER
	
	
*/