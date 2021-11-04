<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../include/header.jsp"%>
	<div id="content">
		<section id="image_slider">
			<div class="image_wapper_container" id="image_container">
				<div class="image_wrapper">
					<!--사진 자르기-->
					<img src="images/room/room2_01.png" />
				</div>
				<div class="image_wrapper">
					<img src="images/room/room2_02.png" />
				</div>
				<div class="image_wrapper">
					<img src="images/room/room2_03.png" />
				</div>
				<div class="image_wrapper">
					<img src="images/room/room2_04.png" />
				</div>
				<div class="image_wrapper">
					<img src="images/room/room2_05.png" />
				</div>
				<div class="image_wrapper">
					<img src="images/room/room2_06.png" />
				</div>
			</div>
			<a href="#" class="button_prev">
				<!--화살표 버튼--> <img src="images/room/prev.png" alt=""
				class="button_arrow" />
			</a> <a href="#" class="button_next"> <img src="images/room/next.png"
				alt="" class="button_arrow" />
			</a>
	
			<div class="button_bullets">
				<!--밑 동그라미버튼-->
				<button class="button1">1</button>
				<button class="button2">2</button>
			</div>
		</section>
		<section id="image_slider_mobile">
			<div class="image_wapper_container" id="image_mobile_container">
				<div class="image_wrapper">
					<!--사진 자르기-->
					<img src="images/room/room2_01.png" />
				</div>
				<div class="image_wrapper">
					<img src="images/room/room2_02.png" />
				</div>
				<div class="image_wrapper">
					<img src="images/room/room2_03.png" />
				</div>
				<div class="image_wrapper">
					<img src="images/room/room2_04.png" />
				</div>
				<div class="image_wrapper">
					<img src="images/room/room2_05.png" />
				</div>
				<div class="image_wrapper">
					<img src="images/room/room2_06.png" />
				</div>
			</div>
			<div class="button_bullets">
				<!--밑 동그라미버튼-->
				<button class="mbutton1">1</button>
				<button class="mbutton2">2</button>
				<button class="mbutton3">3</button>
				<button class="mbutton4">4</button>
				<button class="mbutton5">5</button>
				<button class="mbutton6">6</button>
			</div>
		</section>
		<section class="slider_underLine">
			<hr />
		</section>
	
		<section id="introduce">
			<div>
				<h1>미모아 2</h1>
				<br />
				<p>화이트 빈티지 가구와 네츄럴한 베이지 컬러로 이루어진 room입니다</p>
				<p>침실에 스파가 있는 디자인으로 아늑한 조명과 함께 둘 만의 아름다운 휴식을 선물합니다.</p>
				<br />
				<!--모바일 버전 반응형 추가 텍스트-->
				<div id="introduce_plus_mobile">
					<h3>시설 및 비품</h3>
					<br />
					<p>월풀 스파욕조, 퀸침대1, 벽걸이TV, Olleh TV, WIFI</p>
					<p>빌트인에어컨, 냉장고, 전기밥솥, 전자레인지(인덕션)</p>
					<p>전자레인지, 2인식기, 와인잔, 와인오프너, 헤어드라이어</p>
					<p>커피포트, 제습기, 타월, 비누, 샴푸, 린스, 바디워시</p>
					<br />
				</div>
				<table class="introduce_table">
					<caption></caption>
					<thead>
						<tr>
							<th rowspan="2">객실명</th>
							<th rowspan="2">구조</th>
							<th rowspan="2">크기</th>
							<th rowspan="2">인원<br />(기준/최대)
							</th>
							<th colspan="4">요금안내</th>
							<th rowspan="2">추가요금</th>
						</tr>
						<tr>
							<th>기간</th>
							<th>주중(일-목)</th>
							<th>금요일</th>
							<th>주말(토요일)</th>
						</tr>
					</thead>
					<tbody>
						<tr class="low_tr">
							<th rowspan="2">미모아2</th>
							<th rowspan="2">원룸형/스파<br />월풀스파,침대1<br />욕실,주방
							</th>
							<th rowspan="2">83㎡</th>
							<th rowspan="2">2/2</th>
							<td>비수기</td>
							<td>18만원</td>
							<td>20만원</td>
							<td>23만원</td>
							<th rowspan="2">1인 2만원<br />(영,유아 포함)
							</th>
						</tr>
						<tr class="peak_tr">
							<td>성수기</td>
							<td>28만원</td>
							<td>28만원</td>
							<td>28만원</td>
						</tr>
					</tbody>
				</table>
				<table class="introduce_table_mobile">
					<thead>
						<tr>
							<th colspan="4">오픈형/스파(기준2/최대2)</th>
						</tr>
						<tr>
							<th>기간</th>
							<th>일-목</th>
							<th>금요일</th>
							<th>토요일</th>
						</tr>
					</thead>
					<tbody>
						<tr class="low_tr">
							<td>비수기</td>
							<td>15만원</td>
							<td>17만원</td>
							<td>19만원</td>
						</tr>
						<tr class="peak_tr">
							<td>성수기</td>
							<td>25만원</td>
							<td>25만원</td>
							<td>25만원</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	
		<section class="underLine">
			<hr />
		</section>
		<!--서비스 부분-->
		<section id="service">
			<nav id="service_list1">
				<div id="service_name1" , class="service_name">
					<br />
					<h3>객실 서비스</h3>
				</div>
				<div class="service_box">
					<div>
						<ul>
							<li>월풀 스파욕조</li>
							<li>벽걸이 TV</li>
							<li>무료 WIFI</li>
							<li>KT 인터넷 TV</li>
							<li>커피포트</li>
							<li>와인잔 및 오프너</li>
							<li>주방기구 일체</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>개별 바베큐 테라스</li>
							<li>빌트인 에어컨</li>
							<li>냉장고</li>
							<li>전기레인지(인덕션)</li>
							<li>전자레인지</li>
							<li>제습기</li>
						</ul>
					</div>
				</div>
			</nav>
			<nav id="service_list2" class="service_name">
				<div id="service_name2">
					<br />
					<h3>어메니티</h3>
				</div>
				<div class="service_box">
					<div>
						<ul>
							<li>샴푸 린스 바디워시 비누</li>
							<li>배쓰 타월</li>
							<li>헤어드라이어</li>
						</ul>
					</div>
				</div>
			</nav>
			<nav id="service_list3" class="service_name">
				<div id="service_name3">
					<br />
					<h3>체크인 아웃</h3>
				</div>
				<div class="service_box">
					<div>
						<ul>
							<li>체크인</li>
							<li>체크아웃</li>
						</ul>
					</div>
				</div>
			</nav>
		</section>
		<section id="service_mobile">
			<div id="service_name1" , class="service_name">
				<br />
				<h3>부가 서비스</h3>
			</div>
			<div class="service_image_box">
				<a href="service.html"> <img src="images/room/service1.png" />
					<p>개별 바베큐</p>
				</a> <a href="service.html"> <img src="images/room/service2.png" />
					<p>조식</p>
				</a> <a href="service.html"> <img src="images/room/service3.png" />
					<p>스파 입욕제</p>
				</a> <a href="service.html"> <img src="images/room/service4.png" />
					<p>와인</p>
				</a>
			</div>
		</section>
	
		<section class="underLine">
			<hr />
		</section>
		<section id="image_link">
			<a href="RoomForm.do" class="link_image_wrapper"> <!--이미지 잘라주는 역할 메인이미지는 image_wrapper-->
				<img src="images/room/room1_01.png" />
				<div class="link_image_text">
					<div>
						<p>미모아</p>
						<p>오픈형/스파/2인</p>
					</div>
				</div>
			</a> <a href="Room2Form.do" class="link_image_wrapper"> <img
				src="images/room/room2_01.png" />
				<div class="link_image_text">
					<div>
						<p>미모아2</p>
						<p>원룸형/스파/2인</p>
					</div>
				</div>
			</a> <a href="Room3Form.do" class="link_image_wrapper"> <img
				src="images/room/room3_01.png" />
				<div class="link_image_text">
					<div>
						<p>미모아3</p>
						<p>원룸형/스파/2-4인</p>
					</div>
				</div>
			</a> <a href="Room4Form.do" class="link_image_wrapper"> <img
				src="images/room/room4_01.png" />
				<div class="link_image_text">
					<div>
						<p>미모아5</p>
						<p>원룸형/2인</p>
					</div>
				</div>
			</a>
		</section>
	
		<section class="homebutton">
			<a href="#"><img src="images/room/up.JPG" alt="" /></a>
		</section>
	</div>
<%@ include file="../include/footer.jsp"%>