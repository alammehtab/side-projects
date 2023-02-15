package com.alam.blogappbackend.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class UserDto {
    private Integer id;
    @NotEmpty
    @Size(min = 4, message = "Name must be at least 4 characters long.")
    private String name;
    @NotEmpty
    private String about;
    @Email(message = "Invalid email address.")
    private String email;
    @NotEmpty
    @Size(min = 3, max = 10,message = "Password must be 3 to 10 characters long.")
    private String password;
}
