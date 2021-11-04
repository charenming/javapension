package com.javaP.model.qna;

import org.springframework.stereotype.Repository;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Repository
public class ReplyQnaDto {
	private int no;
	private int qnaNum;
	private String writer;
	private String password;
	private String contents;
	private int replyQnaCount;
	private String masking;
}
