package com.alam.blogappbackend.services;

import com.alam.blogappbackend.dtos.CommentDto;

import java.util.List;

public interface CommentService {
    CommentDto createComment(CommentDto commentDto, Integer postId);
    void deleteComment(Integer commentId);

    List<CommentDto> getAllComments();
}
