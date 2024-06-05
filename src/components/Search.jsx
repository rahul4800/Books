import { useContext, useEffect, useState } from "react";
import Books from "./Books";
//import Bookshelf from "./BookShelf";
//import { BookshelfContext } from "./context/Context";


const Search = () => {
    const [booksInfo, setBooksInfo] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [autoSearch, setAutoSearch] = useState("");
    

    const fetchData = async (title) => {
        try {
            const url = `https://openlibrary.org/search.json?q=${title}&limit=10&page=1.%20API%20query%20params:`;
            let res = await fetch(url);
            let data = await res.json();
            setBooksInfo(data.docs);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            setAutoSearch(searchValue);
        }, 500); 

        return () => {
            clearTimeout(handler);
        };
    }, [searchValue]);

    useEffect(() => {
        if (autoSearch) {
            fetchData(autoSearch);
        }
    }, [autoSearch]);

    

    return (
        <>
            <div className="search-input">
                <input 
                    type="text" 
                    placeholder="Find Your Books" 
                    className="input" 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
            <Books booksInfo={booksInfo}  />
            {/* <Bookshelf bookShelf={bookShelf} /> */}
        </>
    );
}

export default Search;
