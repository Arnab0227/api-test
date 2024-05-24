import {useState} from 'react';


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
        <div className=''>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center space-y-8'>
              
              <div className='text-2xl pt-10'>Search for Image Suggestions </div>
                <input value={term} className='border w-2/3 h-10 rounded-md px-5 focus:outline-none focus:shadow-lg' placeholder="Search for relevent photos like books, sky etc..." onChange={handleChange}/>
                <button type='submit' className='px-8 py-2 border-2 rounded-xl shadow-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 '>Search</button>
            </form>
        </div>
    )

}

export default SearchBar;
