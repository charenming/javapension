<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div id="replyQna" data-no = "${qnaDto.no}">
		<div class="replyQna_area">
			<div>
				<input type="text" id="writer" name="writer" placeholder="이름">
			</div>
			<div>
				<input type="password" id="password" name="password" placeholder="비밀번호">
			</div>
			<div class="replyQnaBox">
				<textarea rows="" cols="" id="contents" name="contents" placeholder="댓글을 남겨주세요"></textarea>
				<button class="btnReply">작성</button> 
			</div>
		</div>
</div>





