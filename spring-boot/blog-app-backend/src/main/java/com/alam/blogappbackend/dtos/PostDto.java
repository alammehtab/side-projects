package com.alam.blogappbackend.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@Getter
@Setter
public class PostDto {
    private Integer Id;
    private String title;
    private String content;
    private String imageName;
    private Date createdAt;
    private UserDto user;
    private CategoryDto category;
    private Set<CommentDto> comments = new HashSet<>();
}
