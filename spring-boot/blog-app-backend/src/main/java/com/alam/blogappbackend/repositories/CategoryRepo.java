package com.alam.blogappbackend.repositories;

import com.alam.blogappbackend.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category,Integer> {
}
