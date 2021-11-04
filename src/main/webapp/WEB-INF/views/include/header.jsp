<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<link rel="stylesheet"
	href="https://unpkg.com/swiper/swiper-bundle.min.css" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="css/reset.css" />
<link rel="stylesheet" href="css/style.css" />
<link rel="stylesheet" href="css/style2.css" />
<link rel="stylesheet" href="css/space.css" />
<link rel="stylesheet" href="css/qna.css" />
<link rel="stylesheet" href="css/reservation.css" />
<link rel="stylesheet" href="css/gallery.css" />

<!-- Swiper -->
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<script src="js/jquery-3.6.0.min.js"></script>
<script src="js/script.js"></script>
<script src="js/qna.js" defer></script>
<script src="js/calendar.js" defer></script>
<script src="js/checkReserve.js" defer></script>
<script src="js/reservation.js" defer></script>
<script src="js/isotope.pkgd.min.js"></script>
<script src="js/imagesloaded.pkgd.min.js"></script>
<script src="js/gsap/gsap.min.js"></script>
<script src="js/gallery.js" defer></script>

<!--폰트-->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap"
	rel="stylesheet" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
	rel="stylesheet">
<link rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
	integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
	crossorigin="anonymous" />
<link rel="shortcut icon" href="images/favicon.ico" />
<title>자바펜션 | 영종도을왕리</title>
</head>

<body>
	<div id="wrap">
		<header class="headerGnb" id="headerGnb">
			<div class="headerInner">
				<div class="logo">
					<a href="Main.do"><img src="images/logo.png" alt="logo" /></a>
				</div>
				<ul class="gnbTab">
					<li><a href="RoomForm.do">공간</a></li>
					<li><a href="PotoForm.do">포토</a></li>
					<li><a href="ServiceForm.do">서비스</a></li>
					<li><a href="LocationForm.do">위치</a></li>
					<li><a href="TourForm.do">여행</a></li>
					<li><a href="QnaList.do">문의</a></li>
				</ul>
				<div class="liveReservationTab">
					<a href="RealtimeReservation.do"> <i class="far fa-paper-plane">실시간예약</i>
					</a>
					<ul class="rsSubMenu">
						<li><a href="Reservation.do">예약하기</a></li>
						<li><a href="ReservationCheck.do">예약확인</a></li>
					</ul>
				</div>
			</div>
			<div class="appGnb">
				<div class="appReservationGnb">
					<a href="RealtimeReservation.do"><i class="far fa-paper-plane"></i></a>
				</div>
				<div class="appLogo">
					<a href="Main.do"><img src="images/logo.png" alt="logo" /></a>
				</div>
				<nav>
					<ul class="toggleGnb">
						<li><i class="fas fa-bars"></i>
							<ul class="subMenu">
								<li><a href="RoomForm.do">공간</a></li>
								<li><a href="PotoForm.do">포토</a></li>
								<li><a href="ServiceForm.do">서비스</a></li>
								<li><a href="LocationForm.do">위치</a></li>
								<li><a href="TourForm.do">여행</a></li>
								<li><a href="QnaList.do">문의</a></li>
							</ul></li>
					</ul>
				</nav>
			</div>
		</header>
		<!--header end-->