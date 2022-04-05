package com.service;

import com.mode.Book;

import java.util.List;

public interface BookService {
    List<Book> getBooks();
    Book getBookById(int bookId);
    Book createBook(Book book);
    Book updateBook(Book book);
}
