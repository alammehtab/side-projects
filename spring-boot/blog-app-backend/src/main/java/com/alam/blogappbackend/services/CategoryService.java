package com.alam.blogappbackend.services;

import com.alam.blogappbackend.dtos.CategoryDto;

import java.util.List;

public interface CategoryService {
    //create
    CategoryDto createCategory(CategoryDto categoryDto);

    //read
    CategoryDto getCategory(Integer categoryId);

    //update
    CategoryDto updateCategory(CategoryDto categoryDto,Integer categoryId);

    //delete
    void deleteCategory(Integer categoryId);

    //get all categories
    List<CategoryDto> getCategories();
}
