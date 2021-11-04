let sendNo;
let sendReplyNo;

////// 댓글 리스트 //////
function getReplies() {
	const no = $("#replyQna").data("no");
	sendNo = no;
	const sendData = {
		qnaNum: sendNo
	}
	$.ajax({
		url: "ReplyQnaList.do",
		type: "POST",
		data: sendData,
		success: function(resultData) {
			$("#viewBoard .replyQnaListBox .list").html("");
			const list = $("#viewBoard .replyQnaListBox .list");
			const replyList = resultData.replyQnaList;
			const total = replyList.length;
			$("#viewBoard .replyQnaCount[data-no=" + sendNo + "]").find(".replyCount").text(total);

			$.each(replyList, function(i, item) {
				list.append(`
							<li class="replyQnaList" data-no="${item.no}" data-qnaNum="${item.qnaNum}">
								<div class="replyInfoBox">
									<div class="replyWriter">${item.masking}</div>
									<div class="replyText">${item.contents}</div>
									<button id="correction">수정</button>
									<span>|</span>
									<button id="delete">지우기</button>
								</div>
								<div class="deleteReplyBox" style="display:none;">
									<input type="password"  class = "deletePwd" name="password" placeholder="비밀번호 확인" >
									<button class = "deleteBtnPwd" >확인</button>
									<button class = "deleteCancelBtn">취소</button>
								</div>
								<div class="updateReplyBox" style="display:none;">
									<div class="updateInfoBox">
										<input type="text" class="updateWriter" name="writer" placeholder="작성자 이름">
										<input type="password" class = "updatePwd" name="password" placeholder="비밀번호 확인" >
									</div>
									<div class="updateContentsBox">
										<textarea rows="" cols="" class="updateContents" name="contents" placeholder="댓글을 입력해주세요"></textarea>
										<button class="updateBtnPwd">확인</button>
										<button class="updateCancelBtn">취소</button>
									</div>
								</div>
							</li>
						  `)
			});
		},
		error: function(errorMsg) {
			console.log(errorMsg);
		}
	});
};

$("#replyQna .btnReply").on("click", function() {
	console.log($(this));
	const no = $("#replyQna").data("no"); // qumNum
	sendNo = no;

	const writer = $("#replyQna").find("#writer").val()
	sendWriter = writer;

	const password = $("#replyQna").find("#password").val()
	sendPassword = password;

	const _parent = $(this).parent();
	
	// 댓글 널값 입력시 처리//
	if($("#replyQna .replyQna_area #writer").val() == ""){
		alert("이름을 입력해주세요");
		$("#replyQna .replyQna_area #writer").focus();
		return false;
	} else if ($("#replyQna .replyQna_area #password").val() == "") {
		alert("비밀번호를 입력해주세요");
		$("#replyQna .replyQna_area #password").focus();
		return false;
	} else if ($("#replyQna .replyQna_area #contents").val() == "") {
		alert("댓글을 입력해주세요");
		$("#replyQna .replyQna_area #contents").focus();
		return false;
	}

	// ReplyQnaDto 구조에 있는 변수명을 따라가야함
	const sendData = {
		qnaNum: sendNo,
		writer: sendWriter,
		password: sendPassword,
		contents: _parent.find("#contents").val()
	}
	

	$.ajax({
		url: "ReplyQnaWrite.do",
		type: "POST",
		data: sendData,
		success: function(resultData) {
			$("#viewBoard .replyQnaListBox .list").html("");
			console.log(resultData);
			$("#replyQna .replyQnaBox textarea").val("");
			const list = $("#viewBoard .replyQnaListBox .list");
			const replyList = resultData.replyQnaList;
			const total = replyList.length;
			$("#viewBoard .replyQnaCount[data-no=" + sendNo + "]").find(".replyCount").text(total);
			$("#writer").val("");
			$("#password").val("");
			
			
			$.each(replyList, function(i, item) {
				list.append(`
							<li class="replyQnaList" data-no="${item.no}" data-qnaNum="${item.qnaNum}">
								<div class="replyInfoBox">
									<div class="replyWriter">${item.masking}</div>
									<div class="replyText">${item.contents}</div>
									<button id="correction">수정</button>
									<span>|</span>
									<button id="delete">지우기</button>
								</div>
								<div>
								<div class="deleteReplyBox" style="display:none;">
									<input type="password"  class = "deletePwd" name="password" placeholder="비밀번호 확인" >
									<button class = "deleteBtnPwd" >확인</button>
									<button class = "deleteCancelBtn">취소</button>
								</div>
								<div class="updateReplyBox" style="display:none;">
									<div class="updateInfoBox">
										<input type="text" class="updateWriter" name="writer" placeholder="작성자 이름">
										<input type="password" class = "updatePwd" name="password" placeholder="비밀번호 확인" >
									</div>
									<div class="updateContentsBox">
										<textarea rows="" cols="" class="updateContents" name="contents" placeholder="댓글을 입력해주세요"></textarea>
										<button class="updateBtnPwd">확인</button>
										<button class="updateCancelBtn">취소</button>
									</div>
								</div>
							</li>
			`)
			});
		},
		error: function(errorMsg) {
			console.log(errorMsg);
		}
	});
});
////// 댓글 삭제 //////
$("#viewBoard .replyQnaListBox").on("click", "li #delete", function() {
	const _parent = $(this).parents(".replyQnaList");
	_parent.find(".deleteReplyBox").show();
	_parent.find(".updateReplyBox").hide();

	sendNo = $("#replyQna").data("no");
	sendReplyNo = _parent.data("no");

	console.log(sendNo);
	console.log(sendReplyNo);
});

$("#viewBoard .replyQnaListBox").on("click", "li .deleteBtnPwd", function() {
	const _parent = $(this).parents(".replyQnaList");
	const sendPwd = _parent.find(".deletePwd").val();
	const sendData = {
		qnaNum: sendNo,
		no: sendReplyNo,
		password: sendPwd
	}
	$.ajax({
		url: "ReplyQnaDelete.do",
		data: sendData,
		success: function(resultData) {
			console.log(resultData);
			if (resultData.error) {
				alert("비밀번호를 확인해 주세요");
			} else {
				alert("삭제되었습니다");
				getReplies();
			}
		}
	});
	console.log(sendData);
});
$("#viewBoard  .replyQnaListBox").on("click", "li .deleteCancelBtn", function() {
	const _parent = $(this).parents(".replyQnaList");
	_parent.find(".deleteReplyBox").hide();
});


////// 댓글 수정 //////
$("#viewBoard .replyQnaListBox").on("click", "li #correction", function() {
	const _parent = $(this).parents(".replyQnaList");
	_parent.find(".updateReplyBox").show();
	_parent.find(".deleteReplyBox").hide();
	_parent.find(".replyInfoBox").hide();

	sendNo = $("#replyQna").data("no");
	sendReplyNo = _parent.data("no");

	console.log(sendNo);
});

$("#viewBoard .replyQnaListBox").on("click", "li .updateBtnPwd", function() {
	const _parent = $(this).parents(".replyQnaList");
	const sendWriter = _parent.find(".updateWriter").val();
	const sendPwd = _parent.find(".updatePwd").val();
	const sendContents = _parent.find(".updateContents").val();
	
	// 댓글 수정시 널값 처리//
	if(_parent.find(".updateWriter").val() == ""){
		alert("이름을 입력해주세요");
		_parent.find(".updateWriter").focus();
		return false;
	} else if (_parent.find(".updatePwd").val() == "") {
		alert("비밀번호를 입력해주세요");
		_parent.find(".updatePwd").focus();
		return false;
	} else if (_parent.find(".updateContents").val() == "") {
		alert("댓글을 입력해주세요");
		_parent.find(".updateContents").focus();
		return false;
	}

	const sendData = {
		qnaNum: sendNo,
		no: sendReplyNo,
		writer: sendWriter,
		password: sendPwd,
		contents: sendContents
	}
	$.ajax({
		url: "ReplyQnaUpdate.do",
		data: sendData,
		success: function(resultData) {
			console.log(resultData);
			if (resultData.error) {
				alert("비밀번호를 확인해 주세요");
			} else {
				alert("수정되었습니다");
				getReplies();
			}
		}
	});
	console.log(sendData);
});
$("#viewBoard .replyQnaListBox").on("click", "li .updateCancelBtn", function() {
	const _parent = $(this).parents(".replyQnaList");
	_parent.find(".updateReplyBox").hide();
	_parent.find(".replyInfoBox").show();

});


////// 문의글 널값 처리 //////
$("#writeBoard .btns .qnaWrite").on("click", function(){
	if($(".mobileFlex .writeName .writer").val() == ""){
		alert("작성자를 입력해주세요");
		$(".mobileFlex .writeName .writer").focus();
		return false;
	} else if ($(".mobileFlex .writePw .password").val() == "") {
		alert("비밀번호를 입력해주세요");
		$(".mobileFlex .writePw .password").focus();
		return false;
	}  else if ($(".writeTable .writeSub .qnaTitle").val() == "") {
		alert("제목을 입력해주세요");
		$(".writeTable .writeSub .qnaTitle").focus();
		return false; 
	}  else if ($(".writeTable .writeTextarea").val() == "") {
		alert("내용을 입력해주세요");
		$(".writeTable .writeTextarea").focus();
		return false; 
	} else {
		return true;
	}
});

//문의글 수정시 널값 처리//
$("#writeBoard .btns .qnaUpdateWrite").on("click", function(){
	if($(".mobileFlex .writeName .updateQnaWriter").val() == ""){
		alert("작성자를 입력해주세요");
		$(".mobileFlex .writeName .updateQnaWriter").focus();
		return false;
	} else if ($(".mobileFlex .writePw .updateQnaPw").val() == "") {
		alert("비밀번호를 입력해주세요");
		$(".mobileFlex .writePw .updateQnaPw").focus();
		return false;
	}  else if ($(".writeTable .writeSub .updateQnaTitle").val() == "") {
		alert("제목을 입력해주세요");
		$(".writeTable .writeSub .updateQnaTitle").focus();
		return false; 
	}  else if ($(".writeTable .updateQnaContents").val() == "") {
		alert("내용을 입력해주세요");
		$(".writeTable .updateQnaContents").focus();
		return false; 
	} else {
		return true;
	}
});
















