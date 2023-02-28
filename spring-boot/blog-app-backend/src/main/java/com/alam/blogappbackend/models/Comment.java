package com.alam.blogappbackend.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    private String content;

    @ManyToOne
    @JoinColumn(name = "postId")
    private Post post;

    //@ManyToOne
    //private User user;
}
