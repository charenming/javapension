<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../include/header.jsp"%>
	<div id="galleryContents">
		<h2 class="galleryContentsTitle">갤러리 업로드</h2>
		<form method="POST" action="GalleryWrite.do" id="join" class="galleryForm" name="signUp" enctype="multipart/form-data" >
			<table border="1" class="galleryWriteTable">
				<colgroup>
					<col style="width: 100px">
					<col style="width: 200px">
				</colgroup>
				<tbody>
					<tr>
						<th>이름(닉네임)</th>
						<td>
							<input type="text" name="id" placeholder="이름을 입력하세요." id="id">
						</td>
					</tr>
					<tr>
						<th>비밀번호</th>
						<td>
							<input type="password" name="password" placeholder="비밀번호를 입력하세요." id="password">
						</td>
					</tr>
					<tr>
						<th>제목</th>
						<td>
							<input type="text" name="title" placeholder="글제목을 입력하세요." id="title">
						</td>
					</tr>
					<tr>
						<th>내용</th>
						<td>
							<textarea name="contents" id="txtContents"></textarea>
						</td>
					</tr>
					<tr>
						<th>파일</th>
						<td><input type="file" name="multipartFile" id="img"></td>
					</tr>
				</tbody>
			</table>
			<div class="gallerybtns center">
				<input class="galleryHoverPoint" type="submit" value="확인">
				<input class="galleryHoverPoint" type="reset" onclick="history.back(); return false" value="취소">
			</div>
		</form>
	</div>
	<%@ include file="../include/footer.jsp" %>