package com.alam.blogappbackend.repositories;

import com.alam.blogappbackend.models.Category;
import com.alam.blogappbackend.models.Post;
import com.alam.blogappbackend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepo extends JpaRepository<Post,Integer> {

    List<Post> findByUser(User user);
    List<Post> findByCategory(Category category);
}
