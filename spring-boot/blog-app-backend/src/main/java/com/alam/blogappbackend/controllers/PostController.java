package com.alam.blogappbackend.controllers;

import com.alam.blogappbackend.config.AppConstants;
import com.alam.blogappbackend.dtos.ApiResponse;
import com.alam.blogappbackend.dtos.PostDto;
import com.alam.blogappbackend.dtos.PostResponse;
import com.alam.blogappbackend.services.FileService;
import com.alam.blogappbackend.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private FileService fileService;

    // path for image in uploadPostImage
    @Value("${project.image}")
    private String path;

    //create
    @PostMapping("/user/{userId}/category/{categoryId}")
    public ResponseEntity<PostDto> createPost(@RequestBody PostDto postDto, @PathVariable Integer userId, @PathVariable Integer categoryId) {
        PostDto createdPostDto = postService.createPost(postDto, userId, categoryId);

        return new ResponseEntity<PostDto>(createdPostDto, HttpStatus.CREATED);
    }

    //update post
    @PutMapping("/post/{postId}")
    public ResponseEntity<PostDto> updatePost(@RequestBody PostDto postDto, @PathVariable Integer postId) {
        PostDto updatedPostDto = postService.updatePost(postDto, postId);

        return new ResponseEntity<PostDto>(updatedPostDto, HttpStatus.OK);
    }

    // get posts by user
    @GetMapping("/user/{userId}/posts")
    public ResponseEntity<List<PostDto>> getPostsByUser(@PathVariable Integer userId, @RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber,
                                                        @RequestParam(value = "pageSize", defaultValue = "10", required = false) Integer pageSize) {
        List<PostDto> postDtos = postService.getPostsByUser(userId, pageNumber, pageSize);

        return new ResponseEntity<List<PostDto>>(postDtos, HttpStatus.OK);
    }

    // get posts by category
    @GetMapping("/category/{categoryId}/posts")
    public ResponseEntity<List<PostDto>> getPostsByCategory(@PathVariable Integer categoryId, @RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber,
                                                            @RequestParam(value = "pageSize", defaultValue = "10", required = false) Integer pageSize) {
        List<PostDto> postDtos = postService.getPostsByCategory(categoryId, pageNumber, pageSize);

        return new ResponseEntity<List<PostDto>>(postDtos, HttpStatus.OK);
    }

    //get single post
    @GetMapping("/post/{postId}")
    public ResponseEntity<PostDto> getPostById(@PathVariable Integer postId) {
        PostDto postDto = postService.getPostById(postId);

        return new ResponseEntity<PostDto>(postDto, HttpStatus.OK);
    }

    // get all posts
    @GetMapping("/posts")
    public ResponseEntity<PostResponse> getAllPosts(@RequestParam(value = "pageNumber", defaultValue = AppConstants.PAGE_NUMBER, required = false) Integer pageNumber,
                                                    @RequestParam(value = "pageSize", defaultValue = AppConstants.PAGE_SIZE, required = false) Integer pageSize,
                                                    @RequestParam(value = "sortBy", defaultValue = AppConstants.SORT_BY, required = false) String sortBy,
                                                    @RequestParam(value = "sortOrder", defaultValue = AppConstants.SORT_ORDER, required = false) String sortOrder) {
        PostResponse postResponse = postService.getAllPosts(pageNumber, pageSize,sortBy,sortOrder);

        return new ResponseEntity<PostResponse>(postResponse, HttpStatus.OK);
    }


    @DeleteMapping("/post/{postId}")
    public ApiResponse deletePost(@PathVariable Integer postId) {
        postService.deletePost(postId);

        return new ApiResponse("Post deleted successfully.", true);
    }

    @GetMapping("/posts/search/{keyword}")
    public ResponseEntity<List<PostDto>> searchPost(@PathVariable("keyword") String keyword){
         List<PostDto> postDtos = postService.searchPosts(keyword);

         return new ResponseEntity<List<PostDto>>(postDtos,HttpStatus.OK);
    }

    // post image upload
    @PostMapping("/post/image/upload/{postId}")
    public ResponseEntity<PostDto> uploadPostImage(@RequestParam("image")MultipartFile image, @PathVariable Integer postId) throws IOException {
        PostDto postDto = postService.getPostById(postId);
        String fileName = fileService.uploadImage(path,image);
        postDto.setImageName(fileName);
        PostDto updatedPostDto = postService.updatePost(postDto,postId);
        return new ResponseEntity<PostDto>(updatedPostDto,HttpStatus.OK);
    }

}
