package com.library.library.Book;

import com.library.library.Author.Author;
import lombok.NonNull;

public record BookTDO(
        Integer id,
        @NonNull
         int nbPage,

                @NonNull
                 String title,

                @NonNull
                 String bookCover,

                 String info,

                @NonNull
        Author author
) {
}
