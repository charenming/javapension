package com.javaP.controller;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.javaP.model.gallery.GalleryDao;
import com.javaP.model.gallery.GalleryDto;
import com.javaP.model.gallery.ReplyGalleryDao;
import com.javaP.model.gallery.ReplyGalleryDto;
import com.javaP.utils.ScriptWriterUtil;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class GalleryController {
	
	@Autowired
	GalleryDao galleryDao;
	
	@Autowired
	GalleryDto galleryDto;
	
	@Autowired
	ReplyGalleryDao replyGalleryDao;
	
	@Autowired
	ReplyGalleryDto replyGalleryDto;
	
	@RequestMapping("/GalleryWriteForm.do")
	public String galleryWriteForm() {
		return "poto/gallery_write";
	}
	
	@RequestMapping("/GalleryWrite.do")
	public String galleryWrite(GalleryDto galleryDto, MultipartFile multipartFile, HttpServletRequest request, HttpServletResponse response) throws IOException {
		
		String context = request.getContextPath();
		String fileRoot = "C:\\javaPGalleryImage\\";
		String origianlFileName = multipartFile.getOriginalFilename();
		String extention = FilenameUtils.getExtension(origianlFileName);
		String savedFileName = UUID.randomUUID()+"."+extention;
		File targetFile = new File(fileRoot+savedFileName);
		String dbFileName = context+"/javaPGalleryImage/"+savedFileName;
		
		try {
			InputStream fileStream = multipartFile.getInputStream();
			FileUtils.copyInputStreamToFile(fileStream, targetFile);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		galleryDto.setRealImg(origianlFileName);
		galleryDto.setImg(dbFileName);
		
		int result = galleryDao.insertGallery(galleryDto);
		if (result > 0) {
			ScriptWriterUtil.alertAndNext(response, "등록되었습니다.", "GalleryList.do");
		} else {
			ScriptWriterUtil.alertAndBack(response, "등록실패");
		}
		
		return null;
	}
	
	@RequestMapping("/GalleryList.do")
	public String galleryList() {
		
		return "poto/poto";
	}
	
	@RequestMapping("/GalleryJsonList.do")
	@ResponseBody
	public Map<String,List<GalleryDto>> galleryJsonList() {
		Map<String,List<GalleryDto>> hashMap = null;
		
		List<GalleryDto> galleryList = galleryDao.getAllGallery();
		hashMap = new HashMap<String,List<GalleryDto>>();
		hashMap.put("galleryList", galleryList);
		
		return hashMap;
	}
	
	
	/////////////////reply//////////////////
	@RequestMapping("/GalleryReplyWrite.do")
	@ResponseBody
	public Map<String, Object> replyWrite(ReplyGalleryDto replyGalleryDto){
		int result = 0;
		result = replyGalleryDao.insertGalleryReply(replyGalleryDto);
		//log.info("replyDto==={}",replyDto);
		int boardId = replyGalleryDto.getBoardId();
		List<ReplyGalleryDto> replyList = replyGalleryDao.getAllGalleryReply(boardId);
		Map<String, Object> hashMap = new HashMap<String, Object>();
		hashMap.put("result", result);
		hashMap.put("replyList", replyList);
		//log.info("result==={}",result);
		//log.info("hashMap==={}",hashMap.get(replyList.get(0)));
		return hashMap;
	}
	
	@RequestMapping("/GalleryReplySelectAll.do")
	@ResponseBody
	public Map<String, Object> getAllReply(ReplyGalleryDto replyGalleryDto) {
		Map<String, Object> hashMap = new HashMap<String, Object>();
		int boardId = replyGalleryDto.getBoardId();
		List<ReplyGalleryDto> replyList = replyGalleryDao.getAllGalleryReply(boardId);
		hashMap.put("replyList", replyList);
		
		return hashMap;
	}
	
	@RequestMapping("/GalleryReplyDelete.do")
	@ResponseBody
	public Map<String, Object> deleteGalleryReply(ReplyGalleryDto replyGalleryDto){
		int no = replyGalleryDto.getNo();
		int boardId = replyGalleryDto.getBoardId();
		replyGalleryDto.setNo(no);
		log.info("password==={}", replyGalleryDto.getPassword());
		int result = replyGalleryDao.deleteGalleryReply(replyGalleryDto);
		List<ReplyGalleryDto> replyList = replyGalleryDao.getAllGalleryReply(boardId);
		Map<String, Object> hashMap = new HashMap<String, Object>();
		hashMap.put("result", result);
		hashMap.put("replyList", replyList);
		
		return hashMap;
	}
	
	@RequestMapping("/GalleryReplyUpdate.do")
	@ResponseBody
	public Map<String, Object> updateGalleryReply(ReplyGalleryDto replyGalleryDto){
		int no = replyGalleryDto.getNo();
		int boardId = replyGalleryDto.getBoardId();
		replyGalleryDto.setNo(no);
		log.info("password==={}", replyGalleryDto.getPassword());
		int result = replyGalleryDao.updateGalleryReply(replyGalleryDto);
		List<ReplyGalleryDto> replyList = replyGalleryDao.getAllGalleryReply(boardId);
		Map<String, Object> hashMap = new HashMap<String, Object>();
		hashMap.put("result", result);
		hashMap.put("replyList", replyList);
		
		return hashMap;
	}
}
