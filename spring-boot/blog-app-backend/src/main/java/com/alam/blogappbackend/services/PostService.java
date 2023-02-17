package com.alam.blogappbackend.services;

import com.alam.blogappbackend.dtos.PostDto;
import com.alam.blogappbackend.models.Post;

import java.util.List;

public interface PostService {

    //create
    PostDto createPost(PostDto postDto, Integer userId, Integer categoryId);

    //read
    Post getPostById(Integer postId);

    //update
    Post updatePost(PostDto postDto, Integer postId);

    //delete
    void deletePost(Integer postId);

    //read all
    List<Post> getAllPosts();

    //read all by category
    List<PostDto> getPostsByCategory(Integer categoryId);

    //read all by user
    List<PostDto> getPostsByUser(Integer userId);

    //search posts
    List<Post> searchPosts(String keyword);
}
