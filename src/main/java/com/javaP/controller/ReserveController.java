package com.javaP.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.javaP.model.reserve.ReserveDao;
import com.javaP.model.reserve.ReserveDto;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class ReserveController {
	@Autowired
	private ReserveDao reserveDao;

	@Autowired
	private ReserveDto reserveDto;

	@RequestMapping("/GetReserveList.do")
	@ResponseBody
	public Map<String, Object> getReserveList(ReserveDto reserveDto) {
		Map<String, Object> hashMap = new HashMap<String, Object>();
		List<ReserveDto> reserveList = null;

		System.out.println(reserveDto.getQueryType());

		if (reserveDto.getQueryType().equals("getAllList"))
			reserveList = reserveDao.getAllReserveList(reserveDto);
		else if (reserveDto.getQueryType().equals("getList"))
			reserveList = reserveDao.getReserveList(reserveDto);

		hashMap.put("reserveList", reserveList);
		return hashMap;
	}

	@RequestMapping("/CheckReservedStatus.do")
	@ResponseBody
	public Map<String, Object> checkedReservedRoom(ReserveDto reserveDto) {
		Map<String, Object> hashMap = new HashMap<String, Object>();
		List<ReserveDto> reserveList = null;

		System.out.println(reserveDto.getQueryType());

		if (reserveDto.getQueryType().equals("checkReservedRoom")) {
			reserveList = reserveDao.checkReservedRoom(reserveDto);
		}
		else if(reserveDto.getQueryType().equals("durationCheck")) {
			reserveList = reserveDao.durationCheck(reserveDto);
		}

		hashMap.put("reserveList", reserveList);
		return hashMap;
	}
	
	
	// 선택해서 넘어오는 경우 해당 경로를 통해서 도달 reservation에 도달
	@RequestMapping("/PushDate.do")
	public String List(Model model, HttpServletRequest request) {
		String selectedDate = request.getParameter("selectedDate");
		System.out.println("selectedDate ===> " + selectedDate);
		model.addAttribute("selectedDate", selectedDate);
		return "reservation/reservation";
	}
	
	
	
	
	

	@RequestMapping("/InsertReservation.do")
	@ResponseBody
	public int insertReservation(@RequestBody ReserveDto reserveDto) {
		int result = 0;
		result = reserveDao.insertReserve(reserveDto);
		System.out.println("result : " + result);

		return result;
	}

	@RequestMapping("/deleteReservation.do")
	@ResponseBody
	public String deleteReservation() {

		return null;

	}
}
