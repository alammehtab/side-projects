package com.alam.blogappbackend.services;

import com.alam.blogappbackend.dtos.UserDto;

import java.util.List;

public interface UserService {
    UserDto createUser(UserDto user);
    UserDto updateUser(UserDto user, Integer userId);
    UserDto getUserById(Integer userId);
    List<UserDto> getAllUsers();
    void deleteUserById(Integer userId);
}
