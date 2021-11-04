package com.javaP.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class PageController {
	
	@RequestMapping("/Main.do") //메인페이지
	public String Main() {
		
		return "main/main";
	}
	
	@RequestMapping("/RoomForm.do") //공간페이지
	public String RoomForm() {
		
		return "room/room";
	}
	
	@RequestMapping("/Room2Form.do") //공간페이지
	public String Room2Form() {
		
		return "room/room2";
	}
	
	@RequestMapping("/Room3Form.do") //공간페이지
	public String Room3Form() {
		
		return "room/room3";
	}
	
	@RequestMapping("/Room4Form.do") //공간페이지
	public String Room4Form() {
		
		return "room/room4";
	}
	
	@RequestMapping("/PotoForm.do") //기록페이지(포토)
	public String PotoForm() {
		
		return "poto/poto";
	}
	
	@RequestMapping("/ServiceForm.do") //서비스페이지
	public String ServiceForm() {
		
		return "service/service";
	}
		
	@RequestMapping("/LocationForm.do") //위치페이지
	public String LocationForm() {
		
		return "location/location";
	}
	
	@RequestMapping("/TourForm.do") //여행페이지(관광명소)
	public String TourForm() {
		
		return "tour/tour";
	}
	
	@RequestMapping("/QnaForm.do") //문의페이지
	public String QnaForm() {
		
		return "qna/qna";
	}
	
	@RequestMapping("/Reservation.do") //실시간예약페이지
	public String Reservation() {
		
		return "reservation/reservation";
	}
	
	@RequestMapping("/RealtimeReservation.do") //실시간예약페이지
	public String RealtimeReservationForm() {
		
		return "reservation/realtimeReservation";
	}
	
	@RequestMapping("/ReservationCheck.do")
	public String ReservationCheck() {
		
		return "reservation/reservationCheck";
	}
}
