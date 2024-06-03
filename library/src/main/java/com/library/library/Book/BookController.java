package com.library.library.Book;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookController {
   private final BookRepository bookRepository ;
   private final BookService bookService;

    public BookController(BookRepository bookRepository, BookService bookService) {
        this.bookRepository = bookRepository;
        this.bookService = bookService;
    }

    @GetMapping("/Book/get")
    public Page<Book> getBooks(@RequestParam int page, @RequestParam int size) {
        return bookService.getBook(page, size);
    }
    @PostMapping("/Book/Add")
    public void addBook(@RequestBody Book book) {
        bookRepository.save(book);
    }

    @GetMapping("/Book/Getbytitle")
    public List<Book> findbytitle(@RequestParam String title) {
        return bookRepository.findByTitleContaining(title);
    }





}
