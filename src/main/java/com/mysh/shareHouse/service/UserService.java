package com.mysh.shareHouse.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mysh.shareHouse.model.User;
import com.mysh.shareHouse.repository.UserRepository;

@Service
public class UserService {
          
	@Autowired
	private UserRepository userRepository;
	
	@Transactional
	public int 회원가입(User user) {
		userRepository.join(user);
		return 1;
	}
	
	@Transactional(readOnly = true)
	public User 로그인(User user) {
		return userRepository.login(user);
	}
}
