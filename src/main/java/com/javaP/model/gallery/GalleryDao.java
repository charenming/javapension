package com.javaP.model.gallery;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lombok.extern.slf4j.Slf4j;

@Repository
@Slf4j
public class GalleryDao {
	
	@Autowired
	private SqlSessionFactory sqlSessionFactory;
	
	public List<GalleryDto> getAllGallery() {
		List<GalleryDto> galleryList = null;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		galleryList = sqlSession.selectList("getAllGallery");
		sqlSession.close();
		
		return galleryList;
	}
	
	public int insertGallery(GalleryDto galleryDto) {
		int result = 0;
		
		SqlSession sqlSession = sqlSessionFactory.openSession();
		result = sqlSession.insert("insertGallery", galleryDto);
		sqlSession.commit();
		sqlSession.close();
		
		return result;
	}
}
