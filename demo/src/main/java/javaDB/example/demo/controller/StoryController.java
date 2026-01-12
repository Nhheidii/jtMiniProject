package javaDB.example.demo.controller;

import javaDB.example.demo.entity.Story;
import javaDB.example.demo.repository.StoryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stories")
// @CrossOrigin
// @CrossOrigin(origins = "*")
public class StoryController {

    private final StoryRepository repo;

    public StoryController(StoryRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Story> getAll() {
        return repo.findAll();
    }
}
