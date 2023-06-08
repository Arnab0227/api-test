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
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images} />
        </div>
    )
}

export default App;