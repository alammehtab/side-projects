package com.alam.blogappbackend.controllers;

import com.alam.blogappbackend.dtos.PostDto;
import com.alam.blogappbackend.models.Post;
import com.alam.blogappbackend.services.PostService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class PostController {

    @Autowired
    private PostService postService;

    //create
    @PostMapping("/user/{userId}/category/{categoryId}")
    public ResponseEntity<PostDto> createPost(@RequestBody PostDto postDto, @PathVariable Integer userId, @PathVariable Integer categoryId){
        PostDto createdPostDto = postService.createPost(postDto,userId,categoryId);

        return new ResponseEntity<PostDto>(createdPostDto, HttpStatus.CREATED);
    }

    // get posts by user
    @GetMapping("/user/{userId}/posts")
    public ResponseEntity<List<PostDto>> getPostsByUser(@PathVariable Integer userId){
        List<PostDto> postDtos = postService.getPostsByUser(userId);

        return new ResponseEntity<List<PostDto>>(postDtos,HttpStatus.OK);
    }

    // get posts by category
    @GetMapping("/category/{categoryId}/posts")
    public ResponseEntity<List<PostDto>> getPostsByCategory(@PathVariable Integer categoryId){
        List<PostDto> postDtos = postService.getPostsByCategory(categoryId);

        return new ResponseEntity<List<PostDto>>(postDtos,HttpStatus.OK);
    }

}
