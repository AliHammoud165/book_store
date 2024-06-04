package com.library.library.Book;

import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book,Integer> {
    @Query("SELECT b FROM Book b WHERE b.Title LIKE %:title%")
    Page<Book> findByTitleContaining(String title, Pageable pageable);
    @Query("SELECT b FROM Book b WHERE b.author.name = :authorName")
    Page<Book> findByAuthorName(@Param("authorName") String authorName, Pageable pageable);


}
