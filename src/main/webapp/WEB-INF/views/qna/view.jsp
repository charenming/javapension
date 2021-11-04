<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../include/header.jsp"%>
<div id="viewBoard">
	<h2 class="contentsTitle">${qnaDto.title }</h2>
	<div class="form">
		<table class="viewTable tdLeft">
			<tbody>
				<tr>
					<td class="viewName">${qnaDto.masking }</td>
				</tr>
				<tr>
					<td class="viewQna">
						<a href="QnaList.do?clickedPage=${clickedViewPage}">문의(CONTACT)</a>
					</td>
					<td class="viewModify">
						<a href="QnaUpdateForm.do?no=${qnaDto.no }&clickedPage=${clickedViewPage}&num=${currentNum.num}">수정</a>
					</td>
					<td class="viewDelete">
						<a onclick="location.href='QnaDeleteForm.do?no=${qnaDto.no }'">지우기</a>
					</td>
				</tr>
				<tr>
					<td class="txtContents" colspan="3">${qnaDto.contents }</td>
				</tr>
			</tbody>
		</table>
		<div class="replyQnaCount" data-no="${qnaDto.no }">
			<span class="material-icons">textsms</span>
			<span class="replyCount">${replyTotal }</span>
		</div>
		<div class="replyQnaListBox">
			<ul class="list">
				<c:forEach var="replyQnaDto" items="${replyQnaList }" begin="0" end="${replyQnaList.size() }" step="1" varStatus="status">
					<li class="replyQnaList" data-no="${replyQnaDto.no }">
						<div class="replyInfoBox">
							<div class="replyWriter">${replyQnaDto.masking }</div>
							<div class="replyText">${replyQnaDto.contents }</div>
							<button id="correction">수정</button>
							<span>|</span>
							<button id="delete">삭제</button>
						</div>
						<div class="deleteReplyBox" style="display:none;">
							<input type="password"  class = "deletePwd" name="password" placeholder="비밀번호 확인" >
							<button class="deleteBtnPwd" >확인</button>
							<button class="deleteCancelBtn">취소</button>
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
				</c:forEach>
			</ul>	
		</div>
		<%@ include file="replyQna.jsp" %>

		<div class="prevAndNext">
			<div class="item"> 
				<span>NEXT</span>
				<span class="material-icons">expand_less</span>
				<c:if test="${prevQnaDto.secret eq '0' }">
					<a href="QnaView.do?no=${prevQnaDto.no}&clickedPage=${clickedViewPage}&num=${prevQnaDto.num}">${prevQnaDto.title }</a>
				</c:if>
				<c:if test="${prevQnaDto.secret eq '1' }">
				<span class="material-icons">lock</span>
					<a id="qnaTitle" href="QnaOpenSecretForm.do?no=${prevQnaDto.no}&clickedPage=${clickedViewPage}&num=${prevQnaDto.num}">비밀글입니다</a>
				</c:if>
			</div>
			<div class="item">
				<span>PREV</span>
				<span class="material-icons">expand_more</span>
				<c:if test="${nextQnaDto.secret eq '0' }">
					<a href="QnaView.do?no=${nextQnaDto.no}&clickedPage=${clickedViewPage}&num=${nextQnaDto.num}">${nextQnaDto.title }</a>
				</c:if>
				<c:if test="${nextQnaDto.secret eq '1' }">
				<span class="material-icons">lock</span>
					<a id="qnaTitle" href="QnaOpenSecretForm.do?no=${nextQnaDto.no}&clickedPage=${clickedViewPage}&num=${nextQnaDto.num}">비밀글입니다</a>
				</c:if>
			</div>
		</div>
		<div class="viewBtns center">
			<a href="QnaList.do?clickedPage=${clickedViewPage}">목록</a>
			<a href="QnaWriteForm.do">글쓰기</a>
		</div>
	</div>
</div>
<script>
	
</script>
<%@ include file="../include/footer.jsp"%>