package com.alam.blogappbackend.repositories;

import com.alam.blogappbackend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {
}
