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
							<li data-no="${item.no}" data-qnaNum="${item.qnaNum}">
									<div class="replyWriter">${item.masking}</div>
									<div class="replyText">${item.contents}</div>
									<button id="correction">수정</button>
									<button id="delete">지우기</button>
								<div class="deleteReplyBox" style="display:none;">
									<input type="password"  class = "deletePwd" name="password" placeholder="비밀번호 확인" >
									<button class = "deleteBtnPwd" >확인</button>
									<button class = "deleteCancelBtn">취소</button>
								</div>
								<div class="updateReplyBox" style="display:none;">
									<input type="text" class="updateWriter" name="writer" placeholder="작성자 이름">
									<input type="password" class = "updatePwd" name="password" placeholder="비밀번호 확인" >
									<textarea rows="" cols="" class="updateContents" name="contents" placeholder="댓글을 입력해주세요"></textarea>
									<button class="updateBtnPwd">확인</button>
									<button class="updateCancelBtn">취소</button>
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

$(document).on("click","#replyQna .btnReply", function() {
	const no = $("#replyQna").data("no"); // qumNum
	sendNo = no;

	const writer = $("#replyQna").find("#writer").val()
	sendWriter = writer;

	const password = $("#replyQna").find("#password").val()
	sendPassword = password;

	const _parent = $(this).parent();

	// ReplyQnaDto 구조에 있는 변수명을 따라가야함
	const sendData = {
		qnaNum: sendNo,
		writer: sendWriter,
		password: sendPassword,
		contents: _parent.find("#contents").val()
	}
	console.log("sendData.qnaNum", "===", sendData.qnaNum)
	console.log("sendData.writer", "===", sendData.writer)
	console.log("sendData.password", "===", sendData.password)
	console.log("sendData.contents", "===", sendData.contents)
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

			$.each(replyList, function(i, item) {
				list.append(`
							<li data-no="${item.no}" data-qnaNum="${item.qnaNum}">
									<div class="replyWriter">${item.masking}</div>
									<div class="replyText">${item.contents}</div>
									<button id="correction">수정</button>
									<button id="delete">지우기</button>
								<div>
								<div class="deleteReplyBox" style="display:none;">
									<input type="password"  class = "deletePwd" name="password" placeholder="비밀번호 확인" >
									<button class = "deleteBtnPwd" >확인</button>
									<button class = "deleteCancelBtn">취소</button>
								</div>
								<div class="updateReplyBox" style="display:none;">
									<input type="text" class="updateWriter" name="writer" placeholder="작성자 이름">
									<input type="password" class = "updatePwd" name="password" placeholder="비밀번호 확인" >
									<textarea rows="" cols="" class="updateContents" name="contents" placeholder="댓글을 입력해주세요"></textarea>
									<button class="updateBtnPwd">확인</button>
									<button class="updateCancelBtn">취소</button>
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
	const _parent = $(this).parent();
	_parent.find(".deleteReplyBox").show();
	_parent.find(".updateReplyBox").hide();

	sendNo = $("#replyQna").data("no");
	sendReplyNo = _parent.data("no");

	console.log(sendNo);
	console.log(sendReplyNo);
});

$("#viewBoard .replyQnaListBox").on("click", "li .deleteBtnPwd", function() {
	const _parent = $(this).parent();
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
	const _parent = $(".deleteReplyBox").parent();
	_parent.find(".deleteReplyBox").hide();
});


////// 댓글 수정 //////
$("#viewBoard .replyQnaListBox").on("click", "li #correction", function() {
	const _parent = $(this).parent();
	_parent.find(".updateReplyBox").show();
	_parent.find(".deleteReplyBox").hide();

	sendNo = $("#replyQna").data("no");
	sendReplyNo = _parent.data("no");

	console.log(sendNo);
});

$("#viewBoard .replyQnaListBox").on("click", "li .updateBtnPwd", function() {
	const _parent = $(".updateReplyBox");
	const sendWriter = _parent.find(".updateWriter").val();
	const sendPwd = _parent.find(".updatePwd").val();
	const sendContents = _parent.find(".updateContents").val();

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
	const _parent = $(".updateReplyBox").parent();
	_parent.find(".updateReplyBox").hide();

});
