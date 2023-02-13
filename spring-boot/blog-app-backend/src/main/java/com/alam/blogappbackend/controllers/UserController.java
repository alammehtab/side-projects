package com.alam.blogappbackend.controllers;

import com.alam.blogappbackend.dtos.ApiResponse;
import com.alam.blogappbackend.dtos.UserDto;
import com.alam.blogappbackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    // create user
    @PostMapping("/new")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto){
        UserDto createdUserDto = userService.createUser(userDto);

        return new ResponseEntity<>(createdUserDto, HttpStatus.CREATED);
    }

    // update user
    @PutMapping("/{userId}")
    public ResponseEntity<UserDto> updateUser(@RequestBody UserDto userDto, @PathVariable Integer userId){
        UserDto updatedUser = this.userService.updateUser(userDto,userId);

        // can use this too:  new ResponseEntity<>()
        return ResponseEntity.ok(updatedUser);
    }

    // delete user
    @DeleteMapping("/{userId}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable Integer userId){
         this.userService.deleteUserById(userId);

         // can also do this instead of the following:
        //  return  new ResponseEntity(Map.of("message","User deleted successfully."),HttpStatus.ok);

         return new ResponseEntity(new ApiResponse("User deleted successfully.",true),HttpStatus.OK);
    }

    // get all users
    @GetMapping("")
    public ResponseEntity<List<UserDto>> getAllUsers(){
        return ResponseEntity.ok(this.userService.getAllUsers());
    }

    // get single users
    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> getSingleUser(@PathVariable Integer userId){
        return ResponseEntity.ok(this.userService.getUserById(userId));
    }
}
