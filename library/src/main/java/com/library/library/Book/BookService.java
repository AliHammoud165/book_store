package com.library.library.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookService {

    private BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Page<BookTDO> getBooks(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Book> bookPage = bookRepository.findAll(pageable);
        List<BookTDO> bookTDOs = bookPage.stream()
                .map(BookMapper::toBookTDO)
                .collect(Collectors.toList());
        return new PageImpl<>(bookTDOs, pageable, bookPage.getTotalElements());
    }

    public Page<BookTDO> getBooksByAuthorName(String authorName, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Book> bookPage = bookRepository.findByAuthorName(authorName, pageable);
        List<BookTDO> bookTDOs = bookPage.stream()
                .map(BookMapper::toBookTDO)
                .collect(Collectors.toList());
        return new PageImpl<>(bookTDOs, pageable, bookPage.getTotalElements());
    }

    public Page<BookTDO> findByTitle(String title, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Book> bookPage = bookRepository.findByTitleContaining(title, pageable);
        List<BookTDO> bookTDOs = bookPage.stream()
                .map(BookMapper::toBookTDO)
                .collect(Collectors.toList());
        return new PageImpl<>(bookTDOs, pageable, bookPage.getTotalElements());
    }
}
