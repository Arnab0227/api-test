import {useState} from 'react';
import './SearchBar.css';

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState('');
    const handleSubmit = (event) => {
      event.preventDefault();

      onSubmit(term);
    }
    const handleChange = (event) => {
      setTerm(event.target.value);
    }
    
    return(
        <div className='search-bar'>
            <form onSubmit={handleSubmit} >
              <label htmlFor="">Search Photo Suggestions</label>
                <input value={term} placeholder="Search for relevent photos like books, sky etc... then hit enter" onChange={handleChange}/>

            </form>
        </div>
    )

}

export default SearchBar;
