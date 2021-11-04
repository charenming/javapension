<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../include/header.jsp"%>
<div id="writeBoard">
	<h2 class="contentsTitle">비밀글 열람</h2>
	<form method="POST" action="QnaOpenSecret.do" class="form">
		<div class="form">
			<table class="deleteTable tdLeft">
				<tbody>
					<tr>
						<th class="deletePw"><input type="password" placeholder="비밀번호 확인" name="password"></th>
					</tr>
				</tbody>
			</table>
			<div class="deleteBtn">
				<input type="submit" value="확인">
				<input onclick="history.back(); return false" value="취소">
			</div>
		</div>
		<input type="hidden" name="no" value="${param.no }">
		<input type="hidden" name="clickedPage" value="${param.clickedPage }">
		<input type="hidden" name="num" value="${param.num }">
	</form>
</div>

<%@ include file="../include/footer.jsp"%>



