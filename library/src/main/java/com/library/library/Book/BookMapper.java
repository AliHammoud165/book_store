package com.library.library.Book;

import com.library.library.Author.Author;

public class BookMapper {

    public static BookTDO toBookTDO(Book book) {
        if (book == null) {
            return null;
        }

        String authorName = (book.getAuthor() != null) ? book.getAuthor().getName() : null;

        return new BookTDO(
                book.getNb_page(),
                book.getTitle(),
                book.getBook_cover(),
                book.getInfo(),
                authorName
        );
    }

    // Method to map BookTDO to Book entity
    public static Book toBook(BookTDO bookTDO, Author author) {
        if (bookTDO == null) {
            return null;
        }

        Book book = new Book();
        book.setNb_page(bookTDO.nbPage());
        book.setTitle(bookTDO.title());
        book.setBook_cover(bookTDO.bookCover());
        book.setInfo(bookTDO.info());
        book.setAuthor(author);

        return book;
    }
}
