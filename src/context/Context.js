import { createContext, useEffect, useState } from "react";

export const BookshelfContext = createContext();

const BookshelfProvider = ({children}) => {
    const [bookshelf, setBookshelf] = useState(()=>{
        const savedBookshelf = localStorage.getItem("bookshelf");
        return savedBookshelf ? JSON.parse(savedBookshelf) : [];
    });

    useEffect(()=>{
        localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
    },[bookshelf]);

    const addToBookshelf = (book) =>{
        setBookshelf((prevBookshelf) => [...prevBookshelf, book])
    }

    return (
        <BookshelfContext.Provider value={{bookshelf, addToBookshelf}} >
            {children}
        </BookshelfContext.Provider>
    );
};

export default BookshelfProvider;