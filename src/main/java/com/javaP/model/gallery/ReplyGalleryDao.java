package com.javaP.model.gallery;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ReplyGalleryDao {
	
	@Autowired
	private SqlSessionFactory sqlSessionFactory;
	
	public int insertGalleryReply(ReplyGalleryDto replyGalleryDto) {
		int result = 0;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		result = sqlSession.insert("insertGalleryReply", replyGalleryDto);
		sqlSession.commit();
		sqlSession.close();
		
		return result;
	}
	
	public List<ReplyGalleryDto> getAllGalleryReply(int boardId) {
		List<ReplyGalleryDto> replyList = null;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		replyList = sqlSession.selectList("getAllGalleryReply", boardId);
		sqlSession.close();
		
		return replyList;
	}
	
	public List<ReplyGalleryDto> getGalleryReplyRI(int no) {
		List<ReplyGalleryDto> replyList = null;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		replyList = sqlSession.selectList("getGalleryReplyRI", no);
		sqlSession.close();
		
		return replyList;
	}
	
	public int deleteGalleryReply(ReplyGalleryDto replyGalleryDto) {
		int result = 0;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		result = sqlSession.delete("deleteGalleryReply", replyGalleryDto);		
		sqlSession.commit();
		sqlSession.close();
		
		return result;
	}
	
	public int updateGalleryReply(ReplyGalleryDto replyGalleryDto) {
		int result = 0;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		result = sqlSession.update("updateGalleryReply", replyGalleryDto);		
		sqlSession.commit();
		sqlSession.close();
		
		return result;
	}
}
