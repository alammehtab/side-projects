package com.example.demo.service;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImp implements StudentService{
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List <Student> getAllStudents(){
        return studentRepository.findAll();
    }

    @Override
    public String updateStudent(Integer id){
        boolean exists = studentRepository.existsById(id);
        if(!exists) return "Student with id "+id+" doesn't exist.";
        return "Student with id "+id+" updated successfully.";
    }

    @Override
    public String deleteStudent(Integer id){
        boolean exists = studentRepository.existsById(id);

        if(!exists){
//          throw new IllegalStateException("Student with id "+id+" does not exist.");
            return "Student with id "+id+" does not exist.";
        }

        studentRepository.deleteById(id);

        return "Student with id "+id+" deleted.";
    }
}
