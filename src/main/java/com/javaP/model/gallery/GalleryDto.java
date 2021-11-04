package com.javaP.model.gallery;

import org.springframework.stereotype.Repository;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Repository
public class GalleryDto {
	private int no;
	private String title;
	private String contents;
	private String img;
	private String realImg;
	private String id;
	private String password;
	private int replyCount;
}
