package com.example.demo.model;

import javax.persistence.*;

@Entity
public class Student {
    @Id
    @SequenceGenerator(name = "student_generator",sequenceName = "student_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "student_generator")
    private int id;
    private String name;
    private String address;

    // constructor
    public Student() {
    }

    // getters and setters started
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
    // getters and setters ended


}
