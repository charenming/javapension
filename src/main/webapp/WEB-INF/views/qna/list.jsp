<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../include/header.jsp"%>
<div id="contents">
	<h2 class="contentsTitle">문의</h2>
	<div class="form">
		<table>
			<colgroup>
				<col style="width: 30px;">
				<col style="width: 200px;">
				<col style="width: 50px;">
			</colgroup>
			<thead>
				<tr>
					<th>번호</th>
					<th class="left">제목</th>
					<th>글쓴이</th>
				</tr>
			</thead>
			<tbody class="qnaBox">
				<c:forEach var="qnaDto" items="${qnaList }" begin="0" end="${qnaList.size()}" step="1" varStatus="status" >
					<tr class="qnaList" data-no="${qnaDto.no }">
						<td>${total - (currentPage-1)*listPerCount - status.index }</td>
						<td>
							<c:if test="${qnaDto.secret eq '0' }">
								<a id="qnaTitle" href="QnaView.do?no=${qnaDto.no }&clickedPage=${currentPage}&num=${qnaDto.num}">${qnaDto.title }</a>
							</c:if>
							<c:if test="${qnaDto.secret eq '1' }">
								<span class="material-icons">lock</span>
								<a id="qnaTitle" href="QnaOpenSecretForm.do?no=${qnaDto.no }&clickedPage=${currentPage}&num=${qnaDto.num}">비밀글입니다</a>
							</c:if>
							<span class="material-icons">textsms</span>  
							<span class="listReplyCount">${qnaDto.replyCount }</span>
						</td>
						<td>${qnaDto.masking }</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		<div class="paginationBox">
			<ul>
				<c:if test="${startPage!=1 }">
					<li>
						<a href="QnaList.do?clickedPage=${startPage - pageGroupCount }">
							<span class="material-icons">chevron_left</span>
						</a>
					</li>
				</c:if>
				<c:forEach var="i" begin="${startPage }" end="${endPage }" step="1" varStatus="status">
					<li class="${currentPage == i ? 'active':'' }"><a href="QnaList.do?clickedPage=${i }">${i }</a></li>
				</c:forEach>
				<c:if test="${endPage != lastPage}">
					<li><a href="QnaList.do?clickedPage=${startPage + pageGroupCount }"><span class="material-icons">chevron_right</span></a></li>
				</c:if>
			</ul>
		</div>
		<div class="btns center">
			<a href="QnaWriteForm.do">글쓰기</a>
		</div>
		
	</div>
</div>
<%@ include file="../include/footer.jsp"%>









