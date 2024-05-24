import ImageShow from './ImageShow';

function ImageList({images}){
    const renderedImages = images.map((image) => {
        return <ImageShow key = {image.id} image = {image}/>
    });
    
    return <div className=' px-5 grid grid-cols-4 gap-4 pt-8 pb-8'>{renderedImages}</div>
}

export default ImageList;