/*
	실행 콘텍스트
	- 함수가 실행되는 영역, 묶음
	- 함수 코드를 실행하고 실행 결과를 저장
	- 엔진이 처리
	
	함수 호출 시 엔진이 실행 콘텍스트 생성, 실행 콘텍스트 안으로 진입
	
	실행 콘텍스트 실행 단계
	- 준비, 초기화, 코드 실행
	
	실행 콘텍스트 생성 시점
	- 실행 가능한 코드 만났을 때
	
	실행 가능한 코드 유형
	- 함수, 글로벌, eval 코드
	
	코드 유형 분리한 이유
	- 실행 콘텍스트에서 처리 방법과 실행 환경이 다르기 때문
	
	함수 코드 - 렉시컬 환경(정적 환경)
	글로벌 코드 - 글로벌 환경
	eval 코드 - 동적 환경
	
	
*/