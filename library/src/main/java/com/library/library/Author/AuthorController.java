package com.library.library.Author;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AuthorController {
private final AuthorRepositpry authorRepositpry;

    public AuthorController(AuthorRepositpry authorRepositpry) {
        this.authorRepositpry = authorRepositpry;
    }
    @PostMapping("/Author")
    public void addAuthor(@RequestBody Author author){
         authorRepositpry.save(author);
    }


}
