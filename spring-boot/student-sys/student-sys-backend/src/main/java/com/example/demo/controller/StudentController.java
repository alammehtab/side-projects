package com.example.demo.controller;

import com.example.demo.model.Student;
import com.example.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/students")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }

    @PostMapping("/new")
    public String newStudent(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New Student Added.";
    }

    @PutMapping("{id}")
    public String updateStudent(@PathVariable("id") Integer id){
        return studentService.updateStudent(id);
    }

    @DeleteMapping("{id}")
    public String deleteStudent(@PathVariable("id") Integer id){
        return studentService.deleteStudent(id);
    }
}
