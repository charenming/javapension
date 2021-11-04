package com.javaP.model.qna;

import org.springframework.stereotype.Repository;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Setter
@Getter
@ToString
@Repository
public class QnaDto {
	private int no;
	private String title;
	private String contents;
	private String writer;
	private String password;
	private int secret;
	private int num;
	private int replyCount;
	private String masking;
}
