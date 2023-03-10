package com.alam.blogappbackend.repositories;

import com.alam.blogappbackend.models.Category;
import com.alam.blogappbackend.models.Post;
import com.alam.blogappbackend.models.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepo extends JpaRepository<Post,Integer> {

    Page<Post> findByUser(User user, Pageable pageable);
    Page<Post> findByCategory(Category category, Pageable pageable);
    List<Post> findByTitleContaining(String title);
}
