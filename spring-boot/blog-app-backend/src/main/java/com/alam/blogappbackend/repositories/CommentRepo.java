package com.alam.blogappbackend.repositories;

import com.alam.blogappbackend.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CommentRepo extends JpaRepository<Comment,Integer> {
}
