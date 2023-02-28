package com.alam.blogappbackend.controllers;

import com.alam.blogappbackend.dtos.ApiResponse;
import com.alam.blogappbackend.dtos.CommentDto;
import com.alam.blogappbackend.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/post/{postId}/comments/new")
    public ResponseEntity<CommentDto> createComment(@RequestBody CommentDto commentDto, @PathVariable Integer postId) {
        CommentDto createdCommentDto = commentService.createComment(commentDto, postId);

        return new ResponseEntity<CommentDto>(createdCommentDto, HttpStatus.CREATED);
    }

    @DeleteMapping("/comments/{commentId}")
    public ResponseEntity<ApiResponse> deleteComment(@PathVariable Integer commentId) {
        commentService.deleteComment(commentId);

        return new ResponseEntity<ApiResponse>(new ApiResponse(String.format("Comment with Id %d deleted successfully.", commentId), true), HttpStatus.OK);
    }

    @GetMapping("/comments")
    public ResponseEntity<List<CommentDto>> getAllComments(){
        List<CommentDto> commentDtos = commentService.getAllComments();
        return new ResponseEntity<List<CommentDto>>(commentDtos,HttpStatus.OK);
    }
}
