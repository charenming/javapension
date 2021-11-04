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
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.javaP.model.qna.QnaDao;
import com.javaP.model.qna.QnaDto;
import com.javaP.model.qna.ReplyQnaDao;
import com.javaP.model.qna.ReplyQnaDto;
import com.javaP.utils.ScriptWriterUtil;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class QnaController {
	
	@Autowired
	QnaDao qnaDao;
	
	@Autowired
	QnaDto qnaDto;
	
	@Autowired
	QnaDto prevQnaDto;
	
	@Autowired
	QnaDto nextQnaDto;
	
	@Autowired
	QnaDto currentNum;
	
	@Autowired
	ReplyQnaDao replyQnaDao;
	
	@Autowired
	ReplyQnaDto replyQnaDto;
	
	
	/// 문의글 전체 리스트 ///
	@RequestMapping("/QnaList.do")
	public String qnaList(Model model, HttpServletRequest request) {
		
		String clickedPage = request.getParameter("clickedPage");
		if(clickedPage==null) {
			clickedPage = "1";  // clickedPage는 null값으로 들어올때도 있다.  header 에 있는  게시판을 클릭했을때...
		}
		
		int currentPage = Integer.parseInt(clickedPage); //정수변환

		int total = 0;
		int listPerCount = 5;   //  한번에 보여지는 리스트 갯수 (tr)
		int pageGroupCount = 3; // pagination의 한번에 보여지는 갯수
		
		total =  qnaDao.getTotal();  // 전체 글 갯수
		int lastPage = (int) ( total / listPerCount ) + 1;
		
		int startPage = (int) ((currentPage - 1)/pageGroupCount)*pageGroupCount + 1;
		int endPage = startPage + pageGroupCount - 1;

		if(endPage > lastPage) {
			endPage = lastPage;
		}
		

		int start = (currentPage - 1)*listPerCount+1;
		int end = start+listPerCount;
		
		List<QnaDto> qnaList = null;
		qnaList = qnaDao.getAllQna(start,end);
		
		model.addAttribute("qnaList", qnaList);
		model.addAttribute("lastPage",lastPage);
		model.addAttribute("listPerCount",listPerCount);
		model.addAttribute("startPage",startPage);
		model.addAttribute("endPage",endPage);
		model.addAttribute("currentPage",currentPage);
		model.addAttribute("pageGroupCount",pageGroupCount);
		model.addAttribute("total",total);
		
		return "qna/qna";
	}
	
	/// 문의글 쓰기 ///
	@RequestMapping("/QnaWriteForm.do")
	public String qnaWriteForm() {
		return "qna/write";
	}
	
	@RequestMapping("/QnaWrite.do")
	public String qnaWrite(QnaDto qnaDto,HttpServletResponse response) throws IOException {
		int result = qnaDao.insertQna(qnaDto);
		if(result > 0) {
			ScriptWriterUtil.alertAndNext(response, " 글이 입력되었습니다.", "QnaList.do");
		} else {
			ScriptWriterUtil.alertAndBack(response, " 글이 등록되지 않았습니다.");
		}
		return null;
	}
	
	/// 문의글 보기 ///
	@RequestMapping("/QnaView.do")
	public String qnaView(int no, int num, Model model, HttpServletRequest request) {
		
		 String clickedViewPage = request.getParameter("clickedPage");
		 if(clickedViewPage==null) {
			 	clickedViewPage = "1";
			}
		
		  log.info("no ==={}", no);
		  log.info("num ==={}", num);
		  log.info("clickedViewPage ==={}", clickedViewPage);
		  
	      qnaDto = qnaDao.getQnaSelectOne(no);
	      prevQnaDto = qnaDao.getSelectPrev(num);
	      nextQnaDto = qnaDao.getSelectNext(num);
	      currentNum = qnaDao.getSelectNum(num);
	      
	      
	      List<ReplyQnaDto> replyQnaList = replyQnaDao.getAllReply(no);
	      
	      
	      
	      int replyTotal = 0;
	      replyTotal = replyQnaDao.getReplyTotal(no);
	    
	      log.info("replyTotal=== {}",replyTotal);
	      
	      model.addAttribute("clickedViewPage", clickedViewPage);
	      model.addAttribute("qnaDto", qnaDto);
	      model.addAttribute("prevQnaDto", prevQnaDto);
	      model.addAttribute("nextQnaDto", nextQnaDto);
	      model.addAttribute("currentNum", currentNum);
	      model.addAttribute("replyQnaList", replyQnaList);
	      model.addAttribute("replyTotal", replyTotal);
	         
	      return "qna/view";

	}
	
	/// 문의글 삭제 ///
	@RequestMapping("/QnaDeleteForm.do")
	public String qnaDeleteFrom() {
		return "qna/delete";
	}
	
	
	@RequestMapping("/QnaDelete.do")
	public String qnaDelete(int no, String password, HttpServletResponse response) throws IOException {
		String qnaPassword = qnaDao.getPassword(no);
		if(qnaPassword.equals(password)) {
			int result = qnaDao.deleteQna(no);
			if(result > 0 ) {
				ScriptWriterUtil.alertAndNext(response, "문의글이 삭제되었습니다", "QnaList.do" );
			} else {
				ScriptWriterUtil.alertAndBack(response, "문의글 삭제에 실패했습니다");
			}
		} else {
			ScriptWriterUtil.alertAndBack(response, "비밀번호를 확인해주세요");
		}
		return null;
	}
	
	/// 문의글 수정 ///
	@RequestMapping("/QnaUpdateForm.do")
	public String qnaUpdateForm() {
		return "qna/update";
	}
	
	@RequestMapping("/QnaUpdate.do")
	public String qnaUpdate(Model model, QnaDto qnaDto, int no, int num, String password, HttpServletResponse response, HttpServletRequest request) throws IOException {
		String qnaPassword = qnaDao.getPassword(no);
		
		String clickedViewPage = request.getParameter("clickedPage");
	      
	      model.addAttribute("clickedViewPage", clickedViewPage);
	      model.addAttribute("qnaDto", qnaDto);
	      
		  log.info("updateNo ==={}", no);
		  log.info("updateNum ==={}", num);
		  log.info("updateClickedViewPage ==={}", clickedViewPage);
		if(qnaPassword.equals(password)) {
			int result = qnaDao.updateQna(qnaDto);
			if(result > 0 ) {
				ScriptWriterUtil.alertAndNext(response, "문의글이 수정되었습니다", "QnaView.do?no="+no+"&clickedPage="+clickedViewPage+"&num="+num+"");
			} else {
				ScriptWriterUtil.alertAndBack(response, "문의글 수정에 실패했습니다");
			}
		} else {
			ScriptWriterUtil.alertAndBack(response, "비밀번호를 확인해주세요.");
		}
		return null;
	}
	
	@RequestMapping("/QnaOpenSecretForm.do")
	public String qnaOpenSecretForm() {
		return "qna/secret";
	}
	
	@RequestMapping("/QnaOpenSecret.do")
	public String qnaOpenSecret(Model model, QnaDto qnaDto, int no, int num, String password, HttpServletResponse response, HttpServletRequest request) throws IOException {
		String qnaPassword = qnaDao.getPassword(no);
		String currentPage = request.getParameter("clickedPage");
		 if(currentPage==null) {
			 currentPage = "1";
			}
		
		model.addAttribute("currentPage",currentPage);
	    model.addAttribute("qnaDto", qnaDto);
	    
	      log.info("no ==={}", no);
		  log.info("num ==={}", num);
		  log.info("currentPage ==={}", currentPage);
	    
	      if(qnaPassword.equals(password)) {
	    	  ScriptWriterUtil.alertAndNext(response, "확인되었습니다", "QnaView.do?no="+no+"&clickedPage="+currentPage+"&num="+num+"");
	      }else {
	    	  ScriptWriterUtil.alertAndBack(response, "비밀번호를 확인해주세요.");
	      }
	      return null;
	}
	
	/////////////// 댓글 ///////////////
	
	@RequestMapping("/ReplyQnaList.do")
	@ResponseBody
	public Map<String, Object> getAllReply(ReplyQnaDto replyQnaDto){
		Map<String, Object> hashMap = new HashMap<String, Object>();
		int qnaNum = replyQnaDto.getQnaNum();
		List<ReplyQnaDto> replyQnaList = replyQnaDao.getAllReply(qnaNum);
		hashMap.put("replyQnaList", replyQnaList);
		return hashMap;
		
		
	}
	
	@RequestMapping("/ReplyQnaWrite.do")
	@ResponseBody
	public Map<String, Object> replyQnaWrite(ReplyQnaDto replyQnaDto) {
		int result = 0;
		result = replyQnaDao.insertReplyQna(replyQnaDto);
		log.info("result==={}",result);
		int qnaNum = replyQnaDto.getQnaNum();
		log.info("qnaNum==={}",qnaNum);
		List<ReplyQnaDto> replyQnaList = replyQnaDao.getAllReply(qnaNum);
		log.info("replyQnaList==={}",replyQnaList);
		Map<String, Object> hashMap = new HashMap<String, Object>();
		hashMap.put("result", result);
		hashMap.put("replyQnaList", replyQnaList);
		return hashMap;
	}
		
	@RequestMapping("/ReplyQnaDelete.do")
	@ResponseBody
	public Map<String,Object> replyQnaDelete(int no, String password, ReplyQnaDto replyQnaDto, HttpServletResponse response) throws IOException {
		int result = 0;
		String replyQnaPassword = replyQnaDao.getReplyPassword(no);
		int qnaNum = replyQnaDto.getQnaNum();
		Map<String,Object> hashMap = new HashMap<String, Object>();
		if(replyQnaPassword.equals(password)) {
			result = replyQnaDao.deleteReply(no);
			List<ReplyQnaDto> replyQnaList = replyQnaDao.getAllReply(qnaNum);
			if(result > 0 ) {
				hashMap.put("result", result);
				hashMap.put("replyQnaList", replyQnaList);
			}
		}else {
			hashMap.put("error", "비밀번호 불일치");
		}
		
		return hashMap;
	}
	
	@RequestMapping("/ReplyQnaUpdate.do")
	@ResponseBody
	public  Map<String,Object> replyQnaUpdate(int no, String password, ReplyQnaDto replyQnaDto) {
		int result = 0;
		String replyQnaPassword = replyQnaDao.getReplyPassword(no);
		int qnaNum = replyQnaDto.getQnaNum();
		Map<String,Object> hashMap = new HashMap<String, Object>();
		if(replyQnaPassword.equals(password)) {
			result = replyQnaDao.updateReply(replyQnaDto);
			List<ReplyQnaDto> replyQnaList = replyQnaDao.getAllReply(qnaNum);
			if(result > 0 ) {
				hashMap.put("result", result);
				hashMap.put("replyQnaList", replyQnaList);
			}
		}else {
			hashMap.put("error", "비밀번호 불일치");
		}
		
		return hashMap;
	}
	
	
	
	/////////////////////////////섬머노트///////////////////////////
	@RequestMapping("/SummerNoteFileUpload.do")
	@ResponseBody
	public Map<String,Object> sendImgFile(
								MultipartFile summerNoteImage, 
								HttpServletResponse response,
								HttpServletRequest request
							 ) {
		
		String context = request.getContextPath();//지금 실행중인 context
		String fileRoot =  "C:\\summernoteImages\\";
		String originalFileName =  summerNoteImage.getOriginalFilename(); // 중복 파일때문에...
		String extention =  FilenameUtils.getExtension(originalFileName);// 확장자 구하기...
		String savedFileName = UUID.randomUUID()+"."+extention; //16짜리 random코드 작성
		File targetFile = new File(fileRoot+savedFileName); 
		String dbFileName = context+"/SummernoteImages/"+savedFileName; 
		log.info("originalFileName==={}",originalFileName);
		log.info("dbFileName==={}",dbFileName);
		
		Map<String,Object> hashMap = new HashMap<String,Object>();
		try {
			InputStream fileStream = summerNoteImage.getInputStream();
			FileUtils.copyInputStreamToFile(fileStream, targetFile);
			hashMap.put("url",context+"/SummernoteImages/"+savedFileName);
			hashMap.put("responseCode","success");
		} catch (IOException e) {
			FileUtils.deleteQuietly(targetFile);
			hashMap.put("responseCode","error");
			e.printStackTrace();
		}
		return hashMap;
	}
}






