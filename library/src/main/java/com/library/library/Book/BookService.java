package com.library.library.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BookService {
private  BookRepository bookRepository;
    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
public Page<Book> getBook(int page,int size){
    Pageable pageable= PageRequest.of(page,size);
    return bookRepository.findAll(pageable);
}
    public Page<Book> getBooksByAuthorName(String authorName, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return bookRepository.findByAuthorName(authorName, pageable);
    }

    public Page<Book> findByTitle(String title, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return bookRepository.findByTitleContaining(title, pageable);
    }

}
