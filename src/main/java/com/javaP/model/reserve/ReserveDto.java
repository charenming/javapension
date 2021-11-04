package com.javaP.model.reserve;

import java.util.List;

import org.springframework.stereotype.Repository;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Repository
public class ReserveDto {
	private String reserve_date;
	private int reserve_room;
	private String name;
	private String phone;
	private String request;
	private String arrive;
	private String howToKnow;
	private int persons;
	private int vaccine;
	private int brunch;
	private int coalAndGrill01;
	private int coalAndGrill02;
	private int whiteWine;
	private int redWine;
	private int spar;
	private int reserve_num;

	private String queryType;
	private String reserved;
	private String removable;
	private int durationDate;

	private List<Integer> roomList;
	private List<Integer> personsList;
	private List<Integer> duration;

	public void clone(ReserveDto reserveDto) {
		this.setReserve_date(reserveDto.reserve_date);
		this.setReserve_room(reserveDto.reserve_room);
		this.setName(reserveDto.name);
		this.setPhone(reserveDto.phone);
		this.setRequest(reserveDto.request);
		this.setArrive(reserveDto.arrive);
		this.setHowToKnow(reserveDto.howToKnow);
		this.setPersons(reserveDto.persons);
		this.setVaccine(reserveDto.vaccine);
		this.setBrunch(reserveDto.brunch);
		this.setCoalAndGrill01(reserveDto.coalAndGrill01);
		this.setCoalAndGrill02(reserveDto.coalAndGrill02);
		this.setWhiteWine(reserveDto.whiteWine);
		this.setRedWine(reserveDto.redWine);
		this.setSpar(reserveDto.spar);

		this.setRoomList(reserveDto.roomList);
		this.setPersonsList(reserveDto.personsList);
		this.setDuration(reserveDto.duration);
	}
}
