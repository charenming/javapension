package com.javaP.model.reserve;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository
public class ReserveDao{
	@Autowired
	private SqlSessionFactory sqlSessionFactory;
	
	public List<ReserveDto> getAllReserveList(ReserveDto reserveDto) {
		List<ReserveDto> allReserveList = null;
		SqlSession sqlSession = sqlSessionFactory.openSession();

		allReserveList = sqlSession.selectList("getAllReserveList", reserveDto);
		sqlSession.close();
		return allReserveList;
	}
	
	public List<ReserveDto> getReserveList(ReserveDto reserveDto) {
		List<ReserveDto> reserveList = null;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		
		reserveList = sqlSession.selectList("getReserveList", reserveDto);
		sqlSession.close();
		return reserveList;
	}
	
	public List<ReserveDto> checkReservedRoom(ReserveDto reserveDto){
		List<ReserveDto> reserveList = null;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		
		reserveList = sqlSession.selectList("checkReservedRoom", reserveDto);
		sqlSession.close();
		return reserveList;
	}
	
	
	public List<ReserveDto> durationCheck(ReserveDto reserveDto){
		List<ReserveDto> reserveList = null;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		
		reserveList = sqlSession.selectList("durationCheck", reserveDto);
		sqlSession.close();
		return reserveList;
	}
	
	
	
	
	
	public int insertReserve(ReserveDto reserveDto) {
		int result = 0;
		
		SqlSession sqlSession = sqlSessionFactory.openSession();
		List<ReserveDto> reserveList = new ArrayList<>();
		
		List<Integer> roomList = reserveDto.getRoomList();
		List<Integer> personsList = reserveDto.getPersonsList();
		List<Integer> durationList = reserveDto.getDuration();


		for(int i=0; i<roomList.size(); i++) {		
			int tempDate = Integer.parseInt(reserveDto.getReserve_date());
			for(int j=0; j<durationList.get(i); j++) {
				ReserveDto tempReserveDto = new ReserveDto();
				tempReserveDto.clone(reserveDto);
				tempReserveDto.setReserve_room(roomList.get(i));
				tempReserveDto.setPersons(personsList.get(i));				
				reserveList.add(tempReserveDto);
				
				
				tempReserveDto.setReserve_date(Integer.toString(tempDate));
				
				tempDate++;
				
				System.out.println(reserveList.get(j));
			}
		}
		
		System.out.println(reserveList);
		
		result = sqlSession.insert("insertReserve", reserveList);
		
		System.out.println("세션 전체 성공");
		
		sqlSession.commit();
		sqlSession.close();
		
		return result;
	}
	
	
	
	
	
	
	
	public int deleteReserve(ReserveDto reserveDto) {
		int result = 0;
		
		SqlSession sqlSession = sqlSessionFactory.openSession();
		result = sqlSession.insert("deleteReserve", reserveDto);
		
		
		sqlSession.commit();
		sqlSession.close();
		
		return result;
	}
}






