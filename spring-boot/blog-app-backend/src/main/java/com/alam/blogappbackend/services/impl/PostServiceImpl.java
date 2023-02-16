package com.alam.blogappbackend.services.impl;

import com.alam.blogappbackend.dtos.PostDto;
import com.alam.blogappbackend.exceptions.ResourceNotFoundException;
import com.alam.blogappbackend.models.Category;
import com.alam.blogappbackend.models.Post;
import com.alam.blogappbackend.models.User;
import com.alam.blogappbackend.repositories.CategoryRepo;
import com.alam.blogappbackend.repositories.PostRepo;
import com.alam.blogappbackend.repositories.UserRepo;
import com.alam.blogappbackend.services.PostService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class PostServiceImpl implements PostService {
    @Autowired
    private PostRepo postRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private CategoryRepo categoryRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public PostDto createPost(PostDto postDto, Integer userId, Integer categoryId) {
        User user = userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","user Id",userId));
        Category category = categoryRepo.findById(categoryId).orElseThrow(()->new ResourceNotFoundException("Category","category Id",categoryId));
        Post post = modelMapper.map(postDto,Post.class);

        // the above line will set just two things that are in dto.
        // so, we've to set the rest ourselves
        post.setImageName("default.png");
        post.setCreatedAt(new Date());
        post.setUser(user);
        post.setCategory(category);

        Post createdPost = postRepo.save(post);

        return modelMapper.map(createdPost,PostDto.class);
    }

    @Override
    public Post getPostById(Integer postId) {
        return null;
    }

    @Override
    public Post updatePost(PostDto postDto, Integer postId) {

        return null;
    }

    @Override
    public void deletePost(Integer postId) {

    }

    @Override
    public List<Post> getAllPosts() {
        return null;
    }

    @Override
    public List<Post> getPostsByCategory(Integer categoryId) {
        return null;
    }

    @Override
    public List<Post> getPostsByUser(Integer userId) {
        return null;
    }

    @Override
    public List<Post> searchPosts(String keyword) {
        return null;
    }
}
