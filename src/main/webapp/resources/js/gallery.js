let gallerySendNo;

$.ajax({
	url: "GalleryJsonList.do",
	success: function(resultData) {
		console.log("여기는 갤러리입니다")
		console.log(resultData.galleryList);
		const galleryList = resultData.galleryList;
		$("#galleryList").append(`<ul class="Glist"></ul>`);
		$.each(galleryList, function(i, item) {
			$("#galleryList ul").append(`
										<li class="item" data-no=${item.no}>
											<div class="galleryImgBox">
												<img src="${item.img}"
											</div>
											<div class="galleryInfo">
												<h2>${item.title}<span>${item.id}</span></h2>
												<p>${item.contents}</p]>
											</div>
											<div class="galleryReplyCount">${item.replyCount}</div>
										</li>
										`);

		});
		$("#galleryList").imagesLoaded(function() {
			const grid = $("#galleryList .Glist").isotope({
				itemSelector: ".item",
				layoutMode: "masonry"
			});
		});
	}
});

$("#galleryList").on("click", "li", function() {
	const imgSrc = $(this).find("img").attr("src");
	const no = $(this).data("no");
	gallerySendNo = no;
	$("#big .galleryImg img").attr({ "src": imgSrc });
	gsap.to("#big", { top: 0, duration: 1, ease: "power4" })
	const sendData = {
		boardId: gallerySendNo
	}
	$.ajax({
		url: "GalleryReplySelectAll.do",
		type: "POST",
		data: sendData,
		success: function(resultData) {
			$("#big .galleryReplyList .GRList").html("");
			console.log(resultData);
			const list = $("#big .galleryReplyList .GRList");
			const replyList = resultData.replyList;
			$.each(replyList, function(i, item) {
				list.append(`
							<li data-no="${item.no}" data-boardid="${item.boardId}">
								<div class="txt">[<span class="GR_id">${item.id}</span>]<br><span class="GR_reply" data-GRreply> ${item.reply}</div>
								<div class="du_icons">
									<button class="GRDbtn galleryHoverPoint"><span class="material-icons">delete</span></button>
									<button class="GRUbtn galleryHoverPoint"><span class="material-icons">edit</span></button>
								</div>
							</li>
							`)
			});
		}
	})
})

$("#big .btnReply").on("click", function() {
	const _parent = $(this).parent().parent();
	const sendData = {
		boardId: gallerySendNo,
		reply: _parent.find("#galleryReply").val(),
		id: _parent.find("#galleryReplyId").val(),
		password: _parent.find("#galleryReplyPassword").val()
	}
	console.log(sendData.boardId, "===", sendData.reply);
	$.ajax({
		url: "GalleryReplyWrite.do",
		type: "POST",
		data: sendData,
		success: function(resultData) {
			$("#big .galleryReplyList .GRList").html("");
			console.log(resultData);
			$(".galleryReplyBox textarea").val("");
			$("#galleryReplyId").val("");
			$("#galleryReplyPassword").val("");
			const list = $("#big .galleryReplyList .GRList");
			const replyList = resultData.replyList;
			const total = replyList.length;
			$("#galleryList li[data-no=" + gallerySendNo + "]").find(".galleryReplyCount").text(total);
			$.each(replyList, function(i, item) {
				list.append(`
							<li data-no="${item.no}" data-boardid="${item.boardId}">
								<div class="txt">[<span class="GR_id">${item.id}</span>]<br><span class="GR_reply" data-GRreply>${item.reply}</div>
								<div class="du_icons">
									<button class="GRDbtn galleryHoverPoint"><span class="material-icons">delete</span></button>
									<button class="GRUbtn galleryHoverPoint"><span class="material-icons">edit</span></button>
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

$(".galleryReplyBox textarea").on("keydown", function() {
	let content = $(this).val();
	if (content.length > 100) {
		alert("입력 제한수 초과되었습니다");
		$(this).val(content.substr(0, 100));
	} else {
		$("#currentCount").text(content.length + 1);
	}
});

$("#big .btnClose").on("click", function() {
	gsap.to("#big", { top: "-150%", duration: 1, ease: "power4" })
});
let _no;
let _parent;

$("#big .galleryReplyList").on("click", "li .GRDbtn", function() {
	_parent = $(this).parent().parent();
	$("#passwordPopup").fadeIn();
	_no = _parent.data("no");
});


$("body").on("click",".GR_passwordCheckBtn", function() {	
	const sendData = {
		boardId: gallerySendNo,
		no: _no,
		password: $("#GR_password").val()
	}
	$.ajax({
		url: "GalleryReplyDelete.do",
		data: sendData,
		success: function(resultData) {
			if (resultData.result > 0) {
				$("#GR_password").val("");
				alert("댓글이 삭제되었습니다.");
				$("#passwordPopup").fadeOut();
				gsap.to(_parent, {
					x: -800,
					ease: "power4.in",
					onComplete: function() {
						_parent.remove();
						const replyList = resultData.replyList;
						const total = replyList.length;
						$("#galleryList li[data-no=" + gallerySendNo + "]").find(".galleryReplyCount").text(total);
					}
				});
			} else {
				alert("비밀번호 확인 좀^^");
			}
		}
	});
});

$("body").on("click",".GR_passwordCheckCancelBtn", function() {
	$("#GR_password").val("");
	$("#passwordPopup").fadeOut();
});

$("#big .galleryReplyList").on("click", "li .GRUbtn", function() {
	_parent = $(this).parent().parent();
	$("#GR_updatePopup").fadeIn();
	_no = _parent.data("no");
	const txtReply = _parent.find(".GR_reply").text();
	$("#galleryReplyUpdate").val(txtReply);
	
});

$(".GRupdateBtn").on("click", function() {
	const sendData = {
		boardId: gallerySendNo,
		no: _no,
		password: $("#GRU_password").val(),
		reply: $("#galleryReplyUpdate").val()
	}
	$.ajax({
		url: "GalleryReplyUpdate.do",
		data: sendData,
		success: function(resultData) {
			if (resultData.result > 0) {
				$("#galleryReplyUpdate").val("");
				$("#GRU_password").val("");
				//$("#galleryReplyUpdate").val("");
				alert("댓글이 수정되었습니다.");
				$("#GR_updatePopup").fadeOut();
				$("#big .galleryReplyList .GRList").html("");
				const list = $("#big .galleryReplyList .GRList");
				const replyList = resultData.replyList;
				$.each(replyList, function(i, item) {
				list.append(`
							<li data-no="${item.no}" data-boardid="${item.boardId}">
								<div class="txt">[<span class="GR_id">${item.id}</span>]<br><span class="GR_reply" data-GRreply> ${item.reply}</div>
								<div class="du_icons">
									<button class="GRDbtn galleryHoverPoint"><span class="material-icons">delete</span></button>
									<button class="GRUbtn galleryHoverPoint"><span class="material-icons">edit</span></button>
								</div>
							</li>
							`)
			});
			} else {
				alert("비밀번호 확인 좀^^");
			}
		}
	});
});
$("body").on("click",".GR_updateCancelBtn", function() {
	$("#GRU_password").val("");
	$("#galleryReplyUpdate").val("");
	$("#GR_updatePopup").fadeOut();
});