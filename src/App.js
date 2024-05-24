import {useState} from 'react';
import SearchImages from './Api';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

function App() {
    const [images, setImages] = useState([]);
    const handleSubmit = async(term) => {
      const result = await SearchImages(term);

      setImages(result);
    }
    return(
        <div>
            <div className='h-16 bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500 rounded-b-md shadow-lg flex items-center justify-center text-white text-4xl'> Image Search</div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images} />
        </div>
    )
}

export default App;