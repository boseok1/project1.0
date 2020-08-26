let index = {		
		init: function(){
			// 리스너 등록 
			
			//let _this = this;
			$("#btn-login").on("click", ()=>{
				this.login();  
				console.log("클릭됨");
			});
			
			$("#btn-join").on("click", ()=>{
				this.join(); // 콜백 스택
			});
			
		
//		join: function(){
//			// ajax 요청
//			let data = {
//					username: $("username").val(),
//					password: $("password").val()
//					
//			};
//			// jquery or fetch
//			$.ajax({
//				type: "POST",
//				url: "/join",
//				data: JSON.stringify(data), 
//				
//				contentType: "application/json; charset=utf-8",
//				
//				dataType: "json"
//				
//			}).done(function(resp){
//				alert("회원가입을 축하합니다!");
//				location.href="/";
//				
//				 
//			}).fail(function(error){
//				alert("회원가입에 실패했습니다.")
//				console.log(error);
//			})
//		},
		alert("login 로직 실행");
		login: function(){
			
			let data = {
					user_id: $("#user_id").val(),
					password: $("#password").val()
			};
			
			$.ajax({
				type: "POST",
				url: "/login",
				data: JSON.stringify(data), 
				contentType: "application/json; charset=utf-8",
				dataType: "json"
			}).done(function(resp){
				if(resp.statusCode == 1) {
					alert("로그인에 성공했습니다!")
					location.href="/";
				} else {
					alert("아이디와 패스워드를 다시 입력하세요.");
					console.log(resp);
				}
			}).fail(function(error){
				alert("로그인에 실패했습니다.")
				console.log(error);
			})
		}
}

index.init();