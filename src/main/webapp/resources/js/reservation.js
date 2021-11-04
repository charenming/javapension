if (document.getElementsByClassName('selectDay').length != 0) {


	/****************클릭 이벤트*******************/
	// 선택하면 선택한것을 제외한 selected는 삭제됨
	// 그와 동시에 selectedDate가 변수에 저장
	$(document).on("click", ".selectable", function() {
		selectedDate = $(this).attr("data-date");

		$(".selected").removeClass("selected");
		$(this).addClass("selected");

		// 객체에 데이터를 담아서 테스트
		checkReservedRoom(selectedDate);
		durationCheck(selectedDate);



		values.roomSum = 0;
		values.serviceSum = 0;
		values.total = 0;


		// 방 선택 체크 초기화
		$(".cbCheck").prop("checked", false);
		// 인원수 초기화
		$(".night").each(function() {
			$(this).find("option:eq(0)").prop("selected", true);
		})
		// 서비스 갯수 초기화
		$(".selectCheck").each(function() {
			$(this).find("option:eq(0)").prop("selected", true);
		})
		// 방 체크 플래그, 기간, 서비스 갯수 변수 초기화
		cb = [0, 0, 0, 0];
		dur = [1, 1, 1, 1];
		ssb = [0, 0, 0, 0, 0, 0];

		// 최종값 계산
		totalValue();
	})


	// 달력 월 바꿀때 새로운 달력 불러오기
	$(".monthChange").on("click", function() {
		let temp = date.getMonth();
		if ($(this).hasClass('left'))
			date.setMonth(date.getMonth() - 1);
		else
			date.setMonth(date.getMonth() + 1);

		console.log(date);

		// 나중에 조건 달아서 다음달 선택시 now에 한달을 더해서 넣도록 함
		if (date.getMonth() < now.getMonth() ||
			date.getMonth() > now.getMonth() + 1 ||
			(date.getFullYear() > now.getFullYear() && date.getMonth() > 1)
		) {
			alert("예약이 불가능한 달 입니다.");
			date.setMonth(temp);
		}
		else {

			makeCalendar02(date.getFullYear(), date.getMonth(), date.getDate());
		}
	})


	// 성인 인원 버튼
	$(".persons").on("click", function() {
		let pTag = $(this).siblings(".result");

		if ($(this).hasClass("plus")) {
			if (parseInt(pTag.text()) < $(this).parent(".adult").attr("data-max"))
				pTag.text(parseInt(pTag.text()) + 1);
		}
		else if ($(this).hasClass("minus")) {
			if (parseInt(pTag.text()) > 1)
				pTag.text(parseInt(pTag.text()) - 1);
		}

	})


	// 룸 체크박스, 기간, 서비스 갯수 변수 설정, 금액 계산용 변수 객체 생성
	let cb = [0, 0, 0, 0];
	let dur = [1, 1, 1, 1];
	let ssb = [0, 0, 0, 0, 0, 0];
	const values = {
		roomSum: 0,
		serviceSum: 0,
		total: 0
	}

	$(document).on("change", ".cbCheck", function() {
		for (i = 0; i <= 3; i++) {
			if ($(`#cb${i + 1}`).is(":checked")) {
				cb[i] = 1;
			}
			else {
				cb[i] = 0;
			}
		}


		totalValue();
	})

	$(document).on("change", ".selectCheck", function() {
		for (i = 0; i <= 5; i++) {
			ssb[i] = $(`#ssb${i + 1}`).val();
		}

		totalValue();
	})

	$(document).on("change", ".night", function() {
		for (i = 0; i <= 3; i++) {
			dur[i] = $(`#night${i + 1}`).val();
		}

		totalValue();
	})

	$(document).on("change", ".agreeAll", function() {
		if ($(".agreeAll").is(":checked")) {
			$(".agree").prop("checked", true);
		}
		else
			$(".agree").prop("checked", false);
	})

	// 최종 예약 확인
	$(document).on("click", ".lastPayment", function() {
		if (($("#agree1").is(":checked") &&
			$("#agree2").is(":checked") &&
			$("#agree3").is(":checked") &&
			$("#agree4").is(":checked"))) {
			let result = confirm("잘못 입력한 내용이 없는지 다시 한번 확인해주십시오.\n예약 등록을 하시겠습니까?");

			if (result) {
				reservation();
			}
		}

		else {
			alert("모든 항목에 동의해주세요.");
		}


	})





















	////************** 메소드 설정 ******************////

	// 돈계산
	function totalValue() {
		values.roomSum =
			170000 * cb[0] * dur[0] +
			200000 * cb[1] * dur[1] +
			200000 * cb[2] * dur[2] +
			170000 * cb[3] * dur[3];


		values.serviceSum =
			5000 * ssb[0] +
			20000 * ssb[1] +
			30000 * ssb[2] +
			25000 * ssb[3] +
			25000 * ssb[4] +
			5000 * ssb[5];





		values.total = values.roomSum + values.serviceSum;

		$(".roomWon").html(`<p>${values.roomSum}</p>`)
		$(".serviceWon").html(`<p>${values.serviceSum}</p>`)
		$(".totalWon").html(`<p>${values.total}</p>`)
	}


	/****************************************************/
	let sYear;
	let sMonth;
	let sDate;
	//기존 페이지에서 가져온 데이터가 있는 경우
	if ($(".calendarTable").is("[data-selected]")) {
		let selectedDate = $(".calendarTable").attr("data-selected");

		sYear = parseInt(selectedDate.substr(0, 4));
		sMonth = parseInt(selectedDate.substr(4, 2)) - 1;
		sDate = parseInt(selectedDate.substr(6, 2));

	}
	else {
		sYear = now.getFullYear();
		sMonth = now.getMonth();
		sDate = now.getDate();

	}

	console.log(sYear + ":" + sMonth + ":" + sDate);

	//첫 로딩때 달력 호출
	makeCalendar02(sYear, sMonth, sDate);

	////////////// 메소드 ////////////////



	// 에약페이지 달력
	function makeCalendar02(pickedYear, pickedMonth, pickedDate) {
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
					$(".weeks:last-child()").append(`<td class="selectable" data-date ="${dataDate}"><span>${count}</span></td>`);
				}

				count++;
			}

			if (count > pageYear[pickedMonth] && i % 7 == 6) {
				break;
			}
		}

		//선택된 날짜를 표시
		let selectedDate = pickedYear + "" + addZero(pickedMonth + 1) + "" + addZero(pickedDate);
		$(`.weeks>td[data-date=${selectedDate}]`).addClass("selected");


		// 달력 호출 후 방 예약 체크, 예약 가능 기간 체크
		checkReservedRoom($(".selected").attr("data-date"));
		durationCheck($(".selected").attr("data-date"))
	}



	// 예약 확인 페이지
	function checkReservedRoom(queryDate) {
		const sendData = {
			queryType: "checkReservedRoom",
			reserve_date: queryDate
		}

		$.ajax({
			url: "CheckReservedStatus.do",
			data: sendData,
			method: "GET",
			success: function(resultData) {
				if (resultData.length == 4) {
					alert("당일은 예약이 불가능합니다.");
				}
				$(`.roomTitle`).removeClass("reservedDoNotReserve");
				$.each(resultData.reserveList, function(i, item) {
					$(`.roomTitle:nth-child(${item.reserve_room}) .cb`).attr("disabled", true);
					$(`.roomTitle:nth-child(${item.reserve_room})`).addClass("reservedDoNotReserve");
				})
			},
			error: function(error) {
				console.log(queryDate, "/ 날짜 오류");
				console.log(error);
			}
		})
	}

 

	// 예약 가능 기간 체크
	function durationCheck(queryDate) {
		const sendData = {
			queryType: "durationCheck",
			reserve_date: queryDate
		}

		$.ajax({
			url: "CheckReservedStatus.do",
			data: sendData,
			method: "GET",
			success: function(resultData) {

				$.each(resultData.reserveList, function(index, item) {
					let night = $("select.night"); // night 태그 가진놈들
					
					for (let i = 1; i <= 4; i++) { //1번부터 4번
						if(item.reserve_room == i){ // reserve__room은 방 번호. 그 방 번호와 일치하면.
							night.eq(i - 1).html(""); // 일단 html을 비우고
							for (let j = 1; j <= item.durationDate; j++) {
								console.log(item.durationDate);
								night.eq(i - 1).append(` 
								<option value="${j}">${j}박</option>
							`)}
						}
						
						else{
							night.eq(i - 1).html("");
							for (let j = 1; j <= 10; j++) {
								night.eq(i - 1).append(`
								<option value="${j}">${j}박</option>
							`)}
						}

					}


				})
			},
			error: function(error) {
				console.log(queryDate, "/ 날짜 오류");
				console.log(error);
			}
		})
	}



	///////※※※※※※※※※※최종 예약※※※※※※※※※※※////////////
	function reservation() {
		let reserve_date = $(".selected").attr("data-date");
		let name = $(".name").val();
		let phone = $(".phone").val();
		let arrive = $(".arrive").val();
		let request = $(".request").val();
		let howToKnow = $(".howToKnow").val();
		let vaccine = 1;
		let brunch = parseInt($("#ssb1").val());
		let coalAndGrill01 = parseInt($("#ssb2").val());
		let coalAndGrill02 = parseInt($("#ssb3").val());
		let whiteWine = parseInt($("#ssb4").val());
		let redWine = parseInt($("#ssb5").val());
		let spar = parseInt($("#ssb6").val());


		// reserve_room이 여러개이므로
		// 배열로 가져옴 
		let roomList = [];
		let count = 0;
		for (i = 1; i <= 4; i++) {
			if ($(`#cb${i}`).is(":checked")) {
				roomList[count] = i;
				count++;
			}

		}
		// roomList에는 체크된 방 번호가 들어있으므로, 해당 번호의 방 데이터만 가져오면 됨
		let personsList = [];
		for (i = 0; i < roomList.length; i++) {
			personsList[i] = parseInt($(`p.result:eq(${roomList[i] - 1})`).text());

		}
		// 여기도 위와 마찬가지.
		let duration = [];
		for (i = 0; i < roomList.length; i++) {
			duration[i] = parseInt($(`#night${roomList[i]}`).val());
		}


		const reserveData = {
			//쿼리 타입
			queryType: "insertReservation",

			reserve_date: reserve_date,
			name: name,
			phone: phone,
			request: request,
			arrive: arrive,
			howToKnow: howToKnow,
			vaccine: vaccine,
			brunch: brunch,
			coalAndGrill01: coalAndGrill01,
			coalAndGrill02: coalAndGrill02,
			whiteWine: whiteWine,
			redWine: redWine,
			spar: spar,

			// 배열 데이터
			roomList: roomList,
			personsList: personsList,
			duration: duration

		}

		console.log(reserveData);

		$.ajax({
			url: "InsertReservation.do",
			data: JSON.stringify(reserveData),
			contentType: "application/json; charset=utf-8",
			dataType: 'json',
			method: "POST",
			success: function(result) {
				if (result == 0) {
					alert("이미 예약되어있거나 잘못된 접근입니다.\n 관리자에게 문의해주세요.");
				} else {
					alert("예약에 성공하였습니다.");
				}
			},
			error: function(error) {
				console.log(reserveData, "/insert 오류");
				console.log(error);
			}
		})
	}
}