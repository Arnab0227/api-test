

function ImageShow({image}){
    return <div className='w-full h-64 overflow-hidden aspect-w-1 aspect-h-1'>
        <img src={image.urls.small} alt={image.alt_description} />
        </div>
}

export default ImageShow;
