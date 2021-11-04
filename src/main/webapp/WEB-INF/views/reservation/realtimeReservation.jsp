<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../include/header.jsp"%>
<main>
	<div class="check">
		<div class="reservationCheck">
			<a href="ReservationCheck.do">예약확인</a>
		</div>
	</div>

	<div id="contents">
		<div class="yearMonth">
			<div class="left monthChange">
				<img src="images/reservation/left.svg" alt="left">
			</div>
			<h2 class="contentsTitle">2021년 10월</h2>
			<div class="right monthChange">
				<img src="images/reservation/right.svg" alt="left">
			</div>
		</div>
		<nav class="stationInfo">
			<ul class="station">
				<li class="available"><img src="images/reservation/ok.jpg"
					alt="available" /> 예약가능</li>
				<li class="soldout"><img src="images/reservation/end.jpg"
					alt="available" /> 예약완료</li>
			</ul>
			<div class="showPay">
				<p>요금보기</p>
			</div>
		</nav>


		<div class="calendar">
			<table class="calendarTable" border='1'>
				<thead>
					<tr class="weeksTitle">
						<th class="sun">일</th>
						<th class="etc">월</th>
						<th class="etc">화</th>
						<th class="etc">수</th>
						<th class="etc">목</th>
						<th class="etc">금</th>
						<th class="sat">토</th>
					</tr>
				</thead>
				<tbody class="dates">
				</tbody>
			</table>
		</div>
	</div>
</main>
<%@ include file="../include/footer.jsp"%>