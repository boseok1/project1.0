package com.mysh.shareHouse.repository;

import com.mysh.shareHouse.model.User;

public interface UserRepository {

	public User login(User user);
	public void join(User user);
}
