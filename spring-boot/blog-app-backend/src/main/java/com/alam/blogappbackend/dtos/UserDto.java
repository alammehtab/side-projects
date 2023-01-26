package com.alam.blogappbackend.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class UserDto {
    private Integer id;
    private String name;
    private String about;
    private String email;
    private String password;
}
