<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../include/header.jsp"%>


<main>
	<div class="PersonalData">
		<div class="dataName">
			<span>Name</span><input type="text" id="name">
		</div>
		<div class="dataPhone">
			<span>Phone</span><input type="text" id="phone"	placeholder=" - 제외하고 입력해주세요.">
		</div>
		<button id="reserveCheck">예약 확인</button>
	</div>
	
	<div class="resultTable">
		<table>
			<thead>
				<tr>
					<th>예약일</th>
					<th>방이름</th>
					<th>도착시간</th>
					<th>인원 수</th>
					<th>2차 접종 여부</th>
					<th>요청사항</th>	
					<th>예약 취소</th>				
				</tr>
			</thead>
			<tbody class="resultList">
				<!--
				<tr>
					<td>2021년 10월 27일</td>
					<td>미모아1</td>
					<td>오후 4시 30분</td>
					<td>3명</td>
					<td>백신 접종 완료</td>
					<td>(마우스(손가락) 이미지, 마우스 호버시 요청사항이 뜸)<span class="request">유선 인터넷 사용 가능한지 확인해주세요.</span></td>
				</td>
				<tr>
					<td>2021년 10월 28일</td>
					<td>미모아1</td>
					<td>오후 4시 30분</td>
					<td>3명</td>
					<td>백신 접*종 완료</td>
					<td>(마우스(손가락) 이미지, 마우스 호버시 요청사항이 뜸)<span class="request">유선 인터넷 사용 가능한지 확인해주세요.</span></td>
				</td>
				 -->
			</tbody>
		</table>
	</div>
</main>


<%@ include file="../include/footer.jsp"%>