import React, { useState } from 'react';
import Image from './Image';
import '../App.css';
import images from '../assets/image'; // Assuming images is an array of image URLs

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

 // const prevImage = () => {
   // setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //};

  //const nextImage = () => {
  //  setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  //};
  //<Image src={images[currentImageIndex]} />


  const onee = () => {
     setCurrentImageIndex((onee) => (onee + 1)% images.length);
   };

   const twoo = () => {
    setCurrentImageIndex((twoo) => (twoo + 2)% images.length);
   };

   const three = () => {
     setCurrentImageIndex((three) => (three + 3)% images.length);
   };
  return (
    <div className="gallery">
      <Image src={images[currentImageIndex]}/>
      <button onClick={onee}>onee</button>
      <button onClick={twoo}>twoo</button>
      <button onClick={three}>three</button>
    </div>
  );
};

export default Gallery;
