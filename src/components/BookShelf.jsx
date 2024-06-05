import { useContext } from "react";
import { BookshelfContext } from "../context/Context";

const BookShelf = () => {
    const { bookshelf } = useContext(BookshelfContext);


    return (
        <div className="books-shelf">
            <h2>My BookShelf</h2>
            <div className="books-content">
                {bookshelf.length > 0 ? (
                    bookshelf.map((book, index) => {
                        return (
                            <div className="cards" key={index}>
                                <div className="title">
                                    <span>Book Title: </span> {book.title}
                                </div>
                                <div className="title">
                                    <span>Edition Count:</span> {book.edition_count}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>No books found in bookshelf</p>
                )

                }
            </div>

        </div>
    );
}
export default BookShelf;