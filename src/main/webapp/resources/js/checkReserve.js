// requestmsg는 길 수도 있기 때문에 별도로 마우스 호버했을때만 보이도록 함
$(document).on("mouseover", ".requestMsg", function(e){
	$(this).children("p").css({
			position: "fixed",
			left: (e.clientX-150)+ "px",
			top: (e.clientY+15) + "px"
		})
})


// 이름과 전화번호를 받아 데이터 출력
if (document.getElementsByClassName('PersonalData').length != 0) {

	$(document).on("click", "button[id='reserveCheck']", function() {

		let name = document.getElementById('name').value;
		let phone = document.getElementById('phone').value;

		const sendData = {
			queryType: "getList",
			name: name,
			phone: phone
		}

		$.ajax({
			url: "GetReserveList.do",
			data: sendData,
			method: "GET",
			success: function(resultData) {
				$(".resultList").html("");
				if (resultData.reserveList.length <= 0) {
					console.log("일치하는 데이터가 없음");
					$(".resultList").append(`<tr><td colspan="7">일치하는 데이터가 없음</td></tr>`)
				}
				else {
					$.each(resultData.reserveList, function(i, item) {
						$(".resultList").append(`
								<tr>
									<td>${item.reserve_date}</td>
									<td>미모아${item.reserve_room}</td>
									<td>${item.arrive}</td>
									<td>${item.persons}</td>
									<td>${item.vaccine}</td>
									<td class="requestMsg"><i class="far fa-hand-point-up"></i><p>${item.request}</p></td>
									<td><span data-reserveNum="${item.reserve_Num}" class="reserveCancel"><a href="#">X</a></span></td>
								</tr>
						`)

						if (item.removable == '0') {
							$(".reserveCancel").parent().html("");
						}
					})
				}
			},
			error: function(error) {
				console.log(error);
			}
		})
	})
}