///////////////////////calendar////////////////////
let now = new Date();
let date = new Date();
date.setDate(15); // 한달을 31일으로 계산하므로, 날짜 연산에 영향 안받게 하기 위해 15일로 설정



if (document.getElementsByClassName('calendar').length != 0) {
	let selectedDate;

	/*************** 마우스 이벤트 모아둠 *******************/

	// 가격 보여주기
	$(document).on("click", ".showPay p", function() {
		console.log("클릭");
		if ($(".roomValue").css("display") == "none")
			$(".roomValue").css("display", "block")
		else
			$(".roomValue").css("display", "none")
	})

	// 마우스 올렸을때 예약자 보여주기
	$(document).on("mouseover", ".disable", function(e) {
		$(this).children("p").css({
			position: "fixed",
			left: e.clientX + "px",
			top: e.clientY + "px"
		})
	})

	// 달력 월 바꿀때 새로운 달력 불러오기
	$(".monthChange").on("click", function() {
		let temp = date.getMonth();
		if ($(this).hasClass('left'))
			date.setMonth(date.getMonth() - 1);
		else
			date.setMonth(date.getMonth() + 1);

		console.log(date);

		/************************************************/

		// 나중에 조건 달아서 다음달 선택시 now에 한달을 더해서 넣도록 함
		if (date.getMonth() < now.getMonth() ||
			date.getMonth() > now.getMonth() + 1 ||
			(date.getFullYear() > now.getFullYear() && date.getMonth() > 1)
		) {
			alert("예약이 불가능한 달 입니다.");
			date.setMonth(temp);
		}
		else {

			makeCalendar01(date.getFullYear(), date.getMonth(), date.getDate());
		}
	})

	// 예약 가능한 방 선택시 데이터를 받아 예약페이지로 이동


	/***************************************/
	// 초기 설정 달력 불러오기
	makeCalendar01(now.getFullYear(), now.getMonth(), now.getDate());
}


// 실시간 예약 달력
function makeCalendar01(pickedYear, pickedMonth, pickedDate) {
	let firstDay = new Date(pickedYear, pickedMonth, 1); // 넘어오는 날짜를 가지고 달력 구성
	const dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	const monthList = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
	const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 윤년
	const noneLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 평년

	let pageYear;

	const pickedNow = new Date();  // 실질적인 달력....
	const firstYear = firstDay.getFullYear();
	const month = monthList[pickedMonth];

	//윤년판단
	if (firstYear % 4 === 0) {
		if (firstYear % 100 === 0) {
			pageYear = noneLeapYear; //  윤년 아님
		} else {
			pageYear = leapYear; //  윤년 아님
		}
	} else {
		pageYear = noneLeapYear;
	}
	if (firstYear % 400 === 0) {
		pageYear = leapYear;
	}



	$(".contentsTitle").text(pickedYear + "년 " + (pickedMonth + 1) + "월");
	$(".dates").html("");


	let count = 1;

	for (let i = 0; i < 42; i++) {
		let dataDate = pickedYear + "" + addZero(pickedMonth + 1) + "" + addZero(count);

		// 일요일마다 한줄씩 추가
		if (i % 7 == 0) {
			$(".dates").append(`<tr class="weeks"></tr>`);
		}

		// 요일으로 시작일 판단,  오늘은 today 클래스를 붙여서 오늘임을 표시, 오늘 이전과 이후로 나누기.
		/////////////////////////////////////////////////////////////////////////////
		if (i < firstDay.getDay() || count > pageYear[pickedMonth]) {
			if (count > pageYear[pickedMonth] && firstDay.getDay() == 0) {
				break;
			}
			$(".weeks:last-child()").append(`<td class="blank"><span></span></td>`);
		} else {

			// 오늘 이전은 지났으므로, gone 클래스를 붙이고 데이터 안불러오기
			if (count < now.getDate() && now.getMonth() == pickedMonth) {
				$(".weeks:last-child()").append(`<td class="gone"><span>${count}</span></td>`);
			}
			else {
				$(".weeks:last-child()").append(`<td data-date ="${dataDate}"><span>${count}</span></td>`);

				// 제일 최근 생성된 td에 각 방만큼의 링크 생성
				$(".calendarTable .dates .weeks:last-child td:last-child").append(`<ul id="rooms"></ul>`);

				for (var roomNum = 1; roomNum <= 4; roomNum++) {
					let value = 0;
					if (roomNum == 1)
						value = 170000;
					else if (roomNum == 2)
						value = 200000;
					else if (roomNum == 3)
						value = 200000;
					else if (roomNum == 4)
						value = 170000;

					$(".weeks:last-child td:last-child #rooms:last-child").append(`
						<li class="room" data-roomNum="${roomNum}">
							<span class="enable">
								<img src="images/reservation/ok.jpg" alt="가능">
								<a href="PushDate.do?selectedDate=${dataDate}" > 자바${roomNum}</a>
							</span>
							<p class="roomValue">${value}원</p>
						</li>`
					);
				}
			}

			count++;
		}

		if (count > pageYear[pickedMonth] && i % 7 == 6) {
			break;
		}
	}

	let queryDate = now.getFullYear() + "" + addZero(now.getMonth() + 1) + "" + addZero(now.getDate());

	const sendData = {
		queryType: "getAllList",
		reserve_date: queryDate
	}

	$.ajax({
		url: "GetReserveList.do",
		data: sendData,
		method: "GET",
		success: function(resultData) {
			$.each(resultData.reserveList, function(i, item) {

				var date;
				var room;
				var name;
				var phone;

				date = item.reserve_date;
				room = item.reserve_room;
				name = item.name;
				phone = item.phone;
				
				
				var firstName = name.substring(0,1)
				var lastName = "****";
				
				var firstPhone = phone.substring(0,3);
				var middlePhone = "****"
				var lastPhone = phone.substring(7,11);

				$(`.weeks td[data-date=${date}] .room[data-roomNum=${room}]`).html("")
					.append(`
						<span class="disable">
							<img src="images/reservation/end.jpg" alt="불가능">
							자바${room}
							<p class="reserver"><span>${firstName+lastName}</span>  <span>${firstPhone+middlePhone+lastPhone}</span></p>
						</span>`
					);
			})
		},
		error: function(error) {
			console.log(queryDate, "/", sendData);
			console.log(error);
		}
	})
}

/************ 10 이하인 숫자에 01, 02처럼 0 붙이기 *************/
function addZero(month) {
	if (month < 10)
		return "0" + month;
	else
		return month;
}