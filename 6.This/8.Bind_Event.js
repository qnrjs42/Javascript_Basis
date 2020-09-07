/*
	bind() 활용, 이벤트 처리
*/


// 1. point.js 파일의 코드
var book = {
	myPoint: 100,
	setEvent: function() {
		var node = document.getElementById("point");
		node.onclick = this.show.bind(book, node);
	},
	show: function(node, event) {
		console.log(node.textContent); // 값 출력
		console.log(this.myPoint); // 100
	}
};

book.setEvent();