package com.alam.blogappbackend.dtos;

import com.alam.blogappbackend.models.Category;
import com.alam.blogappbackend.models.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class PostDto {
    private Integer Id;
    private String title;
    private String content;
    private String imageName;
    private Date createdAt;
    private UserDto user;
    private CategoryDto category;
}
