
import './styles/index.scss';
import Navbar from './components/Navbar';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom';
import BookshelfProvider from './context/Context';
import BookShelf from './components/BookShelf';

function App() {
  return (
    <BookshelfProvider>
      
         <Navbar />
        <Routes>
          
          <Route path='/' element={<Search />} />
          <Route path='/bookshelf' element={<BookShelf />} />
        </Routes>
        

      
    </BookshelfProvider>


  );
}

export default App;
