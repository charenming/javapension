package com.javaP.model.qna;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ReplyQnaDao {
	
	@Autowired
	SqlSessionFactory sqlSessionFactory;
	
	public int insertReplyQna(ReplyQnaDto replyQnaDto) {
		int result = 0;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		result = sqlSession.insert("insertReplyQna", replyQnaDto);
		sqlSession.commit();
		sqlSession.close();
		return result;
	}
	
	public List<ReplyQnaDto> getAllReply(int qnaNum) {
		List<ReplyQnaDto> replyQnaList = null;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		replyQnaList = sqlSession.selectList("getAllReply", qnaNum);
		sqlSession.close();
		return replyQnaList;
	}
	
	public String getReplyPassword(int no) {
		String password = null;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		password = sqlSession.selectOne("getReplyPassword",no);
		sqlSession.commit();
		sqlSession.close();
		return password;
	}
	
	public int deleteReply (int no) {
		int result = 0;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		result = sqlSession.delete("deleteReply", no);
		sqlSession.commit();
		sqlSession.close();
		return result;
	}
	
	public int updateReply (ReplyQnaDto replyQnaDto) {
		int result = 0;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		result = sqlSession.update("updateReply", replyQnaDto);
		sqlSession.commit();
		sqlSession.close();
		return result;
	}
	
	public int getReplyTotal(int qnaNum) {
		int result = 0;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		result = sqlSession.selectOne("getReplyTotal", qnaNum);
		sqlSession.close();
		return result;
	}
	
}