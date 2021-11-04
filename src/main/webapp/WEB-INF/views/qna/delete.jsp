<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../include/header.jsp"%>
<div id="writeBoard">
	<h2 class="contentsTitle">문의글 지우기</h2>
	<form method="POST" action="QnaDelete.do" class="form">
		<div class="form">
			<table class="deleteTable tdLeft">
				<tbody>
					<tr>
						<th class="deletePw"><input type="password" placeholder="비밀번호" name="password"></th>
					</tr>
				</tbody>
			</table>
			<div class="deleteBtn">
				<input type="submit" value="삭제">
				<input onclick="history.back(); return false" value="취소">
			</div>
		</div>
		<input type="hidden" name="no" value="${param.no }">
	</form>
</div>

<%@ include file="../include/footer.jsp"%>



