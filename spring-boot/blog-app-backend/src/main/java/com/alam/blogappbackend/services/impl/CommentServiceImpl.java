package com.alam.blogappbackend.services.impl;

import com.alam.blogappbackend.dtos.CommentDto;
import com.alam.blogappbackend.exceptions.ResourceNotFoundException;
import com.alam.blogappbackend.models.Comment;
import com.alam.blogappbackend.models.Post;
import com.alam.blogappbackend.repositories.CommentRepo;
import com.alam.blogappbackend.repositories.PostRepo;
import com.alam.blogappbackend.services.CommentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    private PostRepo postRepo;
    @Autowired
    private CommentRepo commentRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public CommentDto createComment(CommentDto commentDto, Integer postId) {
        Post post = postRepo.findById(postId).orElseThrow(()->new ResourceNotFoundException("Post","postId",postId));
        Comment comment = modelMapper.map(commentDto, Comment.class);
        comment.setPost(post);
        Comment savedComment = commentRepo.save(comment);

        return modelMapper.map(savedComment,CommentDto.class);
    }

    @Override
    public void deleteComment(Integer commentId) {
        Comment comment = commentRepo.findById(commentId).orElseThrow(()->new ResourceNotFoundException("Comment","commentId",commentId));

        commentRepo.delete(comment);
    }

    @Override
    public List<CommentDto> getAllComments() {
        List<Comment> comments = commentRepo.findAll();

        return comments.stream().map(comment -> modelMapper.map(comment,CommentDto.class)).collect(Collectors.toList());
    }
}
