// 메뉴 스크롤
$(function () {
  $(window).scroll(function (evt) {
    var y = $(this).scrollTop();
    if (y > 120) {
      $(".header").addClass("gnbBg");
      $(".gnb>li>a,.liveReservation>a>i").addClass("gnbColor");
      $(".logo").css("display", "none");
      $(".logoBlack").css("display", "block");
    } else {
      $(".header").removeClass("gnbBg");
      $(".gnb>li>a,.liveReservation>a>i").removeClass("gnbColor");
      $(".logoBlack").css("display", "none");
      $(".logo").css("display", "block");
    }
  });

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
