<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../include/header.jsp"%>
<div id="writeBoard">
	<h2 class="contentsTitle">문의(CONTACT)</h2>
	<form method="POST" action="QnaWrite.do" class="form">
		<table class="writeTable">
			<tbody>
				<tr class="mobileFlex">
					<td class="writeName">
						<input  type="text" class="writer" name="writer" placeholder="작성자 이름">
					</td>
					<td class="writePw">
						<input  type="password" class="password" name="password" placeholder="비밀번호">
					</td>
					<td class="writeRadio">
						<input  type="radio" name="secret" id="secret" class="secret" value="0" checked="checked"><span> 공개</span>&nbsp;&nbsp;&nbsp;
						<input  type="radio" name="secret" id="secret" class="secret" value="1"><span> 비공개</span>
					</td>
				</tr>
				<tr>
					<td colspan="3" class="writeSub">
						<input  type="text" class="qnaTitle" name="title" placeholder="제목">
					</td>
				</tr>
				<tr>
					<td colspan="3">
						<textarea rows="" cols="" name="contents" placeholder="내용을 입력해주세요" id="summernote" class="writeTextarea"></textarea>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="btns center">
			<input type="submit" class="qnaWrite" value="작성">
			<input onclick="history.back(); return false" value="취소">
		</div>
	</form>
</div>
<script>
	$("#summernote").summernote({
		height : 400,
		callbacks : {
			onImageUpload : function(files) {
				//$summernote.summernote('insertNode', imgNode);
				uploadImg(files[0],this);
			}
		}
	});
	function uploadImg(file,editor) {
		sendData = new FormData(); // 자바스크립트에서 <form>에 들어가 있지 않은 데이터 받기.
		sendData.append("summerNoteImage",file);  // form  <input type="text" name="userName">
		$.ajax({
			data:sendData,
			type:"POST",
			url:"SummerNoteFileUpload.do",  // fileupload   cos.jar
			cache:false,
			contentType:false,// true  multipartformdata    
			processData:false,
			dataType:"json",
			success:function(data){
				//console.log(data);
				$(editor).summernote("editor.insertImage",data.url);
			}
		})
	}
</script>

<%@ include file="../include/footer.jsp"%>



