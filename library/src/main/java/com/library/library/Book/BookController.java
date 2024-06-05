package com.library.library.Book;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class BookController {
   private final BookRepository bookRepository ;
   private final BookService bookService;

    public BookController(BookRepository bookRepository, BookService bookService) {
        this.bookRepository = bookRepository;
        this.bookService = bookService;
    }

    @GetMapping("/Book/get")
    public Page<BookTDO> getBooks(@RequestParam int page, @RequestParam int size) {
        return bookService.getBooks(page, size);
    }
    @PostMapping("/Book/Add")
    public void addBook(@RequestBody Book book) {
        bookRepository.save(book);
    }

    @GetMapping("/Book/Getbytitle")
    public Page<BookTDO>findbytitle(@RequestParam String title,@RequestParam int page,@RequestParam int size) {
        return bookService.findByTitle(title,page,size);
    }


    @GetMapping("/books/by-author")
    public Page<BookTDO> getBooksByAuthorName(@RequestParam String authorName, @RequestParam int page, @RequestParam int size) {
        return bookService.getBooksByAuthorName(authorName, page, size);
    }

    @GetMapping("/book/by_id")
    public Optional<Book> getBookById(@RequestParam Integer Id){
        return bookRepository.findById(Id);    }


}
