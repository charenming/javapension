// 메뉴 스크롤
$(function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //app toggle
  $(".toggle>li").mouseover(function () {
    $(".subMenu").stop().slideDown();
  });
  $(".toggle>li").mouseleave(function () {
    $(".subMenu").stop().slideUp();
  });
  $(".toggleGnb>li").mouseover(function () {
    $(".subMenu").stop().slideDown();
  });
  $(".toggleGnb>li").mouseleave(function () {
    $(".subMenu").stop().slideUp();
  });

  $(".liveReservation").mouseover(function () {
    $(".rsSubMenu").stop().slideDown();
  });
  $(".liveReservation").mouseleave(function () {
    $(".rsSubMenu").stop().slideUp();
  });

  $(".liveReservationTab").mouseover(function () {
    $(".rsSubMenu").stop().slideDown();
  });
  $(".liveReservationTab").mouseleave(function () {
    $(".rsSubMenu").stop().slideUp();
  });
});

//selectNotice
$(function () {
  $(".viewMore").click(function () {
    $(".selectNotice").show();
    $(".viewMore").hide();
    $(".viewStop").show();
  });
  $(".viewStop").click(function () {
    $(".selectNotice").hide();
    $(".viewStop").hide();
    $(".viewMore").show();
  });
});

// space
$(function () {
  //밑에 점 버튼
  document.querySelector(".button1").addEventListener("click", function () {
    document.querySelector(".image_wapper_container").style.transform =
      "translate(0px)";
  });
  document.querySelector(".button2").addEventListener("click", function () {
    document.querySelector(".image_wapper_container").style.transform =
      "translate(-1120px)";
  });

  //밑 점버튼 (모바일)
  document.querySelector(".mbutton1").addEventListener("click", function () {
    document.querySelector("#image_mobile_container").style.transform =
      "translate(0px)";
  });
  document.querySelector(".mbutton2").addEventListener("click", function () {
    document.querySelector("#image_mobile_container").style.transform =
      "translate(-570px)";
  });
  document.querySelector(".mbutton3").addEventListener("click", function () {
    document.querySelector("#image_mobile_container").style.transform =
      "translate(-1140px)";
  });
  document.querySelector(".mbutton4").addEventListener("click", function () {
    document.querySelector("#image_mobile_container").style.transform =
      "translate(-1710px)";
  });
  document.querySelector(".mbutton5").addEventListener("click", function () {
    document.querySelector("#image_mobile_container").style.transform =
      "translate(-2280px)";
  });
  document.querySelector(".mbutton6").addEventListener("click", function () {
    document.querySelector("#image_mobile_container").style.transform =
      "translate(-2850px)";
  });

  //화살표 버튼
  document.querySelector(".button_prev").addEventListener("click", function () {
    document.querySelector(".image_wapper_container").style.transform =
      "translate(0px)";
  });
  document.querySelector(".button_next").addEventListener("click", function () {
    document.querySelector(".image_wapper_container").style.transform =
      "translate(-1120px)";
  });
});
//반응형
/*window.onresize = function(event){
var innerWidth = window.innerWidth;
if(innerWidth <= 570){
var script1 =
'<div id="service_name1", class="service_name"><br><h3>부가 서비스</h3></div>'+
'<img src="../images/공간/service1.png">'+
'<img src="../images/공간/service2.png">'+
'<img src="../images/공간/service3.png">'+
'<img src="../images/공간/service4.png">';
}
document.getElementById("service").innerHTML=script1;
}*/
