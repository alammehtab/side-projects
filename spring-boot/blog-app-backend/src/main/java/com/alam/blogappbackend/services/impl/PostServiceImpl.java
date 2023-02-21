package com.alam.blogappbackend.services.impl;

import com.alam.blogappbackend.dtos.PostDto;
import com.alam.blogappbackend.dtos.PostResponse;
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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

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
    public PostDto getPostById(Integer postId) {
        Post post = postRepo.findById(postId).orElseThrow(()-> new ResourceNotFoundException("Post","post Id",postId));

        return modelMapper.map(post,PostDto.class);
    }

    @Override
    public PostDto updatePost(PostDto postDto, Integer postId) {
        Post post = postRepo.findById(postId).orElseThrow(()-> new ResourceNotFoundException("Post","post Id",postId));

        post.setTitle(postDto.getTitle());
        post.setContent(postDto.getContent());
        post.setImageName(postDto.getImageName());

        return modelMapper.map(post,PostDto.class);
    }

    @Override
    public void deletePost(Integer postId) {
        Post post = postRepo.findById(postId).orElseThrow(()->new ResourceNotFoundException("Post","post Id",postId));
        postRepo.delete(post);
    }

    @Override
    public PostResponse getAllPosts(Integer pageNumber, Integer pageSize) {
        //a pageable instance
        Pageable p = PageRequest.of(pageNumber,pageSize);

        //getting the actual page we're currently on
        Page<Post> postsPage = postRepo.findAll(p);

        //getting the content of the page
        List<Post> posts = postsPage.getContent();

        List<PostDto> postDtos = posts.stream().map((post)->modelMapper.map(post,PostDto.class)).collect(Collectors.toList());

        PostResponse postResponse = new PostResponse();

        postResponse.setContent(postDtos);
        postResponse.setPageNumber(postsPage.getNumber());
        postResponse.setPageSize(postsPage.getSize());
        postResponse.setTotalElements(postsPage.getTotalElements());
        postResponse.setTotalPages(postsPage.getTotalPages());
        postResponse.setIsLastPage(postsPage.isLast());

        return postResponse;
    }

    @Override
    public List<PostDto> getPostsByCategory(Integer categoryId, Integer pageNumber, Integer pageSize) {
        Category category = categoryRepo.findById(categoryId).orElseThrow(()->new ResourceNotFoundException("Category","category Id",categoryId));
        Pageable p = PageRequest.of(pageNumber,pageSize);

        Page<Post> postsPage = postRepo.findByCategory(category,p);
        List<Post> posts = postsPage.getContent();

        List<PostDto> postDtos = posts.stream().map((post)->modelMapper.map(post,PostDto.class)).collect(Collectors.toList());

        return postDtos;
    }

    @Override
    public List<PostDto> getPostsByUser(Integer userId, Integer pageNumber, Integer pageSize) {
        User user = userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","user Id",userId));
        Pageable p = PageRequest.of(pageNumber,pageSize);
        Page<Post> postsPage = postRepo.findByUser(user,p);

        // getting posts using pageable
        List<Post> posts = postsPage.getContent();

        List<PostDto> postDtos = posts.stream().map((post)->modelMapper.map(post,PostDto.class)).collect(Collectors.toList());

        return postDtos;
    }

    @Override
    public List<Post> searchPosts(String keyword) {
        return null;
    }
}
