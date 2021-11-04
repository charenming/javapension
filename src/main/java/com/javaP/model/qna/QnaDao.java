package com.javaP.model.qna;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class QnaDao {
	
	@Autowired
	SqlSessionFactory sqlSessionFactory;
	
	public List<QnaDto> getAllQna(int start, int end) {
		//getAllList 라는 Mapper에 있는 id값을 가진 곳에 parameterType이 HashMap일때 
		HashMap<String, Integer> page = new HashMap<String, Integer>();
		page.put("start", start);
		page.put("end", end);
		
		List<QnaDto> qnaList = null;

		SqlSession sqlSession = sqlSessionFactory.openSession();
		qnaList = sqlSession.selectList("getAllList",page);
		sqlSession.close();
		return qnaList;
	}
	
	public int insertQna(QnaDto qnaDto) {
		int result = 0;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		result = sqlSession.insert("insertQna",qnaDto);	
		sqlSession.commit();
		sqlSession.close();
		return result;
	}
	
	public String getPassword(int no) {
		String password = null;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		password = sqlSession.selectOne("getPassword",no);
		sqlSession.close();
		return password;
	}
	
	public int deleteQna (int no) {
		int result = 0;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		result = sqlSession.delete("deleteQna", no);
		sqlSession.commit();
		sqlSession.close();
		return result;
	}
	
	public int updateQna (QnaDto qnaDto) {
		int result = 0;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		result = sqlSession.update("updateQna", qnaDto);
		sqlSession.commit();
		sqlSession.close();
		return result;
	}

	public QnaDto getQnaSelectOne(int no) {
		QnaDto  qnaDto = null;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		qnaDto = sqlSession.selectOne("getQnaSelectOne",no);
		sqlSession.close();
		return qnaDto;
	}
	
	public QnaDto getSelectPrev(int num) {
		QnaDto qnaDto = null;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		qnaDto = sqlSession.selectOne("getSelectPrev",num);
		sqlSession.close();
		return qnaDto;
	}
	public QnaDto getSelectNext(int num) {
		QnaDto qnaDto = null;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		qnaDto = sqlSession.selectOne("getSelectNext",num);
		sqlSession.close();
		return qnaDto;
	}
	
	public QnaDto getSelectNum(int num) {
		QnaDto qnaDto = null;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		qnaDto = sqlSession.selectOne("getCurrentNum", num);
		sqlSession.close();
		return qnaDto;
	}
	
	public int getTotal() {
		int result = 0;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		result = sqlSession.selectOne("getTotal");
		sqlSession.close();
		return result;
	}
	
	////// 댓글 구현 //////
//	
//	/// 댓글 리스트 ///
//	public List<ReplyQnaDto> getAllReply(int qna_num){
//		List<ReplyQnaDto> replyList = null;
//		SqlSession sqlSession = sqlSessionFactory.openSession();
//		replyList = sqlSession.selectList("getAllReply", qna_num);
//		sqlSession.commit();
//		sqlSession.close();
//		return replyList;
//	}
//	
//	/// 댓글 작성 ///
//	public int insertReplyQna (ReplyQnaDto replyQnaDto) {
//		int result = 0;
//		SqlSession sqlSession = sqlSessionFactory.openSession();
//		result = sqlSession.insert("insertReplyQna", replyQnaDto);
//		sqlSession.commit();
//		sqlSession.close();
//		return result;
//	}
}