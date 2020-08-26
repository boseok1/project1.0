package com.mysh.shareHouse.model;



import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
	
	private int id;	
	private String password;
	private String email;
	private String profile;
	private Timestamp createDate;
}
