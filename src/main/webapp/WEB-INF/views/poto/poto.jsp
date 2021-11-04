<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../include/header.jsp"%>
	<div id="galleryHeader">
		<div id="galleryList">
			
		</div>
		<div id="big">
			<div class="imgWrap">
				<div class="galleryImg">
					<img src="">
				</div>
				<div class="galleryReplyBox">
					<div class="input_inner">
						<input type="text" name="id" placeholder="닉네임을 입력하세요." id="galleryReplyId">
						<input type="password" name="password" placeholder="비밀번호를 입력하세요." id="galleryReplyPassword">
					</div>
					<div class="textareaBtnReply">
						<textarea name="reply" id="galleryReply" placeholder="댓글을 입력해주세요."></textarea>
						<button class="btnReply galleryHoverPoint">댓글 등록</button>
					</div>
				</div>
				<div class="txtCount">
					<span id="currentCount">0</span>/100
				</div>
			</div>
			<div class="galleryReplyList">
				<!-- 여기에 댓글 등록 -->
				<ul class="GRList">
					
				</ul>
			</div>
			<button class="btnClose galleryHoverPoint"><span class="material-icons">close</span></button>
		</div>
    </div>
	<div id="passwordPopup">
        <div class="GRmodal">
            <input type="password" name="password" placeholder=" 비밀번호를 입력하세요." id="GR_password">
            <button class = "GR_passwordCheckBtn galleryHoverPoint" >확인</button>
			<button class = "GR_passwordCheckCancelBtn galleryHoverPoint">취소</button>
        </div>
    </div>
    <div id="GR_updatePopup">
        <div class="GRmodal">
            <input type="password" name="password" placeholder=" 비밀번호를 입력하세요." id="GRU_password">
            <button class = "GR_updateCancelBtn galleryHoverPoint">취소</button>
			<div class="GRupdateReply">
				<textarea name="reply" id="galleryReplyUpdate" placeholder="댓글을 입력해주세요."></textarea>
				<button class="GRupdateBtn galleryHoverPoint">댓글 수정</button>
			</div>
        </div>
    </div>
	<div class="gallerybtns center"><a href="GalleryWriteForm.do">글쓰기</a></div>
<%@ include file="../include/footer.jsp"%>