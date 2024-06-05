package com.library.library.Book;

import com.library.library.Author.Author;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.lang.NonNull;

import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NonNull
    private int Nb_page;

    @NonNull
    private String Title;

    @NonNull
    private String Book_cover;

    private String Info;

    private Double Rating;

    private String Language;

    private LocalDate PublicationDate;

    private String ISBN;





    @ManyToOne
    @JoinColumn(name = "author_id")
    private Author author;

    public Book(int nb_page, @NonNull String title, @NonNull String book_cover, String info, Double rating, String language, LocalDate publicationDate, String ISBN, Author author) {
        Nb_page = nb_page;
        Title = title;
        Book_cover = book_cover;
        Info = info;
        Rating = rating;
        Language = language;
        PublicationDate = publicationDate;
        this.ISBN = ISBN;
        this.author = author;
    }

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getNb_page() {
        return Nb_page;
    }

    public void setNb_page(int nb_page) {
        Nb_page = nb_page;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getBook_cover() {
        return Book_cover;
    }

    public void setBook_cover(String book_cover) {
        Book_cover = book_cover;
    }

    public String getInfo() {
        return Info;
    }

    public void setInfo(String info) {
        Info = info;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public Double getRating() {
        return Rating;
    }

    public void setRating(Double rating) {
        Rating = rating;
    }

    public String getLanguage() {
        return Language;
    }

    public void setLanguage(String language) {
        Language = language;
    }

    public LocalDate getPublicationDate() {
        return PublicationDate;
    }

    public void setPublicationDate(LocalDate publicationDate) {
        PublicationDate = publicationDate;
    }

    public String getISBN() {
        return ISBN;
    }

    public void setISBN(String ISBN) {
        this.ISBN = ISBN;
    }
}
