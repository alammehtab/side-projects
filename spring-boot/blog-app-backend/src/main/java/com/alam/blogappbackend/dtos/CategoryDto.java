package com.alam.blogappbackend.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class CategoryDto {
    private Integer Id;
    @NotBlank
    @Size(min = 4,message = "Category title must be at least 4 characters long.")
    private String title;
    @NotBlank
    @Size(min = 10,message = "Category description must be at least 10 characters long.")
    private String description;
}
