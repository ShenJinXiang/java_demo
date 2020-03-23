package com.shenjinxiang.spb.controller;

import com.shenjinxiang.spb.bean.Student;
import com.shenjinxiang.spb.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/students")
    public List<Student> queryAll() {
        return this.studentService.queryAll();
    }

    @GetMapping("/students/{id}")
    public Student queryById(@PathVariable("id") int id) {
        return this.studentService.queryById(id);
    }

    @PostMapping(value = "/students", consumes = "application/json")
    public int add(@RequestBody Student student) {
        return this.studentService.add(student);
    }

    @PutMapping(value = "/students", consumes = "application/json")
    public int update(@RequestBody Student student) {
        return this.studentService.update(student);
    }

    @DeleteMapping("/students/{id}")
    public int delById(@PathVariable("id") int id) {
        return this.studentService.delById(id);
    }
}
