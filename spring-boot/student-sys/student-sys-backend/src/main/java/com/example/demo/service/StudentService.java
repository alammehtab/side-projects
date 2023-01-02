package com.example.demo.service;

import com.example.demo.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List <Student> getAllStudents();
    public String updateStudent(Integer id);
    public String deleteStudent(Integer id);
}
