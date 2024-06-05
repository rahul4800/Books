import { Link } from "react-router-dom";

const Navbar = () => {

    const handleClick = () => {

    }

    return (
        <nav>
            <div className="navbar">
                <div>
                    Books...
                </div>
                <Link to="/BookShelf">
                    <button onClick={handleClick}>
                        My Bookshell
                    </button>
                </Link>


            </div>
            <div className="header">
                Read Your Books...
            </div>
        </nav>
    );
}

export default Navbar;