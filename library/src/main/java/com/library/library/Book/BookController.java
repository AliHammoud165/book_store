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
    public Page<Book>findbytitle(@RequestParam String title,@RequestParam int page,@RequestParam int size) {
        return bookService.findByTitle(title,page,size);
    }


    @GetMapping("/books/by-author")
    public Page<Book> getBooksByAuthorName(@RequestParam String authorName, @RequestParam int page, @RequestParam int size) {
        return bookService.getBooksByAuthorName(authorName, page, size);
    }


}
