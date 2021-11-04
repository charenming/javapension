<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../include/header.jsp"%>
<div id="contents">
	<h2 class="contentsTitle">댓글 지우기</h2>
	<form method="POST" action="ReplyQnaDelete.do" class="form">
		<div class="form">
			<table class="tdLeft">
				<cols>
				<col style="width: 150px;">
				<col style="width: 350px;">
				<col style="width: 150px;">
				<col style="width: 350px;">
				</cols>
				<tbody>
					<tr>
						<th><input type="password" placeholder="비밀번호" name="password"></th>
					</tr>
					<tr>
						<td><input type="submit" value="지우기"></td>
						<td><input onclick="history.back(); return false" value="취소"></td>
					</tr>
				</tbody>
			</table>
		</div>
		<input type="hidden" name="no" value="${param.no }">
	</form>
</div>

<%@ include file="../include/footer.jsp"%>