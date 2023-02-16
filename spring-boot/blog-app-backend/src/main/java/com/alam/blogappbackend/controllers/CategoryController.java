package com.alam.blogappbackend.controllers;

import com.alam.blogappbackend.dtos.ApiResponse;
import com.alam.blogappbackend.dtos.CategoryDto;
import com.alam.blogappbackend.services.CategoryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    //create
    @PostMapping("/new")
    public ResponseEntity<CategoryDto> createCategory(@Valid @RequestBody CategoryDto categoryDto) {
        CategoryDto createdCategoryDto = categoryService.createCategory(categoryDto);

        return new ResponseEntity<CategoryDto>(createdCategoryDto, HttpStatus.CREATED);
    }

    //read
    @GetMapping("/{catId}")
    public ResponseEntity<CategoryDto> getCategory(@PathVariable Integer catId) {
         CategoryDto categoryDto = categoryService.getCategory(catId);

         return new ResponseEntity<CategoryDto>(categoryDto,HttpStatus.OK);
    }

    //update
    @PutMapping("/{catId}")
    public ResponseEntity<CategoryDto> updateCategory(@Valid @RequestBody CategoryDto categoryDto, @PathVariable Integer catId) {
        CategoryDto updatedCategoryDto = categoryService.updateCategory(categoryDto, catId);

        return new ResponseEntity<CategoryDto>(updatedCategoryDto, HttpStatus.OK);
    }

    //delete
    @DeleteMapping("/{catId}")
    public ResponseEntity<ApiResponse> deleteCategory(@PathVariable Integer catId) {
        categoryService.deleteCategory(catId);

        return new ResponseEntity<ApiResponse> (new ApiResponse("Category deleted successfully.",true),HttpStatus.OK);
    }

    //read all
    @GetMapping("")
    public ResponseEntity<List<CategoryDto>> getCategory() {
        List<CategoryDto> categoryDtos = categoryService.getCategories();

        return new ResponseEntity<List<CategoryDto>>(categoryDtos,HttpStatus.OK);
    }
}
