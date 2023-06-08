import axios from 'axios';

const SearchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 7izrb6Oy56CjqQ_N5iVb5hx0Q04UjvmiTnHBSLge5js'
        },

        params: {
            query: term,
        }
    });
    console.log(response)
    return response.data.results;
};

export default SearchImages;

