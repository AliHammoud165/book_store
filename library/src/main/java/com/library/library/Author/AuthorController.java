package com.library.library.Author;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
