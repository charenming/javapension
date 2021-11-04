package com.javaP.model.gallery;

import org.springframework.stereotype.Repository;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Repository
public class ReplyGalleryDto {
	private int no;
	private int boardId;
	private String reply;
	private String id;
	private String password;
}
