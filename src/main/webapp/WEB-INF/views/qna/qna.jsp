<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../include/header.jsp"%>
<div id="content">
	<section>
		<div class="titleBox">
			<div class="titleIcon">
				<img src="images/qna/title.png" alt="qna">
			</div>
			<div class="titleText">
				<p>궁금한 사항은 자바펜션에 문의하세요 :)</p>
			</div>
		</div>
	</section>
	<section>
		<div class="bgBox">
			<div class="noticeBoard inner">
				<div class="notice">
					<div class="noticeTitle">
						<h3>체크인-체크아웃 안내</h3>
					</div>
					<div class="noticeText">
						<p>
							입실 - 15시 이후 / 퇴실 - 11시<br> 자바펜션에는 이용자 카페가 준비되어 있습니다.<br>
							입실 후 저녁 9시 이전까지 카페를 이용할 수 있습니다.<br> 입실은 자바카페에서 진행합니다.<br>
							퇴실 전 객실 점검을 받아야 합니다.
						</p>
					</div>
				</div>
				<div class="notice">
					<div class="noticeTitle">
						<h3>1박이 아닌 경우</h3>
					</div>
					<div class="noticeText">
						<p>
							1박이 아닌 경우의 이용 요금과 수칙입니다.<br> 입실일 15시 이후 부터 다음날 11시 까지 1박입니다.<br>
							모든 투숙객에 동일한 1박 요금과 규정을 적용합니다.
						</p>
					</div>
				</div>
				<div class="notice">
					<div class="noticeTitle">
						<h3>문의사항 접수</h3>
					</div>
					<div class="noticeText">
						<p>
							문의사항은 게시판에 남겨주시기 바랍니다.<br> 내용을 남겨주시면 확인 후 답변드리겠습니다.
						</p>
					</div>
				</div>
			</div>

			<div class="qnaBoard inner">
				<div id="contents">
					<div class="form">
						<table>
							<thead>
								<tr>
									<th class="thNum">번호</th>
									<th class="thSub">제목</th>
									<th class="thWriter">글쓴이</th>
								</tr>
							</thead>
							<tbody class="qnaBox">
								<c:forEach var="qnaDto" items="${qnaList }" begin="0"
									end="${qnaList.size()}" step="1" varStatus="status">
									<tr class="qnaList" data-no="${qnaDto.no }">
										<td class="tdNum">${total - (currentPage-1)*listPerCount - status.index }</td>
										<td class="tdSub"><c:if test="${qnaDto.secret eq '0' }">
												<a id="qnaTitle"
													href="QnaView.do?no=${qnaDto.no }&clickedPage=${currentPage}&num=${qnaDto.num}">${qnaDto.title }</a>
											</c:if> <c:if test="${qnaDto.secret eq '1' }">
												<span class="material-icons">lock</span>
												<a id="qnaTitle"
													href="QnaOpenSecretForm.do?no=${qnaDto.no }&clickedPage=${currentPage}&num=${qnaDto.num}">비밀글입니다</a>
											</c:if> <span class="material-icons textsms">textsms</span> <span
											class="listReplyCount">${qnaDto.replyCount }</span></td>
										<td class="tdWriter">${qnaDto.masking }</td>
									</tr>
								</c:forEach>
							</tbody>
						</table>
						<div class="btnWriteBox">
							<button class="btnWrite">
								<a href="QnaWriteForm.do">글쓰기</a>
							</button>
						</div>
						<div class="paginationBox">
							<ul>
								<c:if test="${startPage!=1 }">
									<li><a
										href="QnaList.do?clickedPage=${startPage - pageGroupCount }">
											<span class="material-icons">chevron_left</span>
									</a></li>
								</c:if>
								<c:forEach var="i" begin="${startPage }" end="${endPage }"
									step="1" varStatus="status">
									<li class="${currentPage == i ? 'active':'' }"><a
										href="QnaList.do?clickedPage=${i }">${i }</a></li>
								</c:forEach>
								<c:if test="${endPage != lastPage}">
									<li><a
										href="QnaList.do?clickedPage=${startPage + pageGroupCount }"><span
											class="material-icons">chevron_right</span></a></li>
								</c:if>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
<%@ include file="../include/footer.jsp"%>