import { useContext } from "react";
import { BookshelfContext } from "../context/Context";


const Books = ({ booksInfo }) => {
    const {addToBookshelf} = useContext(BookshelfContext);
    
    return (
        <div className="books-container">
            {
                booksInfo.length > 0 ? (
                    booksInfo.map((items, index)=> {
                        return (
                            <div className="cards" key={index}>
        
                                <div className="title">
                                    <span>Book Title: </span> {items.title}
                                </div>
                                <div className="title">
                                    <span>Edition Count:</span> {items.edition_count}
                                </div>
                                
                                <button onClick={() => addToBookshelf(items)}>Add To Bookshelf </button>
        
                            </div>
                        );
                    })
                ) : (
                    <p>Loading...</p>
                )
            }
            
        </div>
    );
}

export default Books;