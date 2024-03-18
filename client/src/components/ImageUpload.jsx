import React, { useState } from 'react';
import { storage } from '../utils/firebase';
import './ImageUpload.css';
import nullProfile from '../images/nullProfile.jpeg';
// import {storage} from '../utils/firebase.js';

const ImageUploadComponent = ({ onImageUploaded }) => {
  const [image, setImage] = useState(null);
  const [imgUrl, setImageUrl] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);
      setImageUrl(URL.createObjectURL(selectedImage)); // Generate URL for selected image
    }
  };

  const handleUpload = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    if (!image) {
      console.log('Please select an image.');
      return;
    }

    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Progress function
      },
      (error) => {
        console.log('Upload error:', error);
      },
      () => {
        // Complete function
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log('File available at', url);
            // Do something with the URL, like saving it to a database or displaying it in your UI
            onImageUploaded(url); // Pass the URL to the parent component
            // imgUrl=url;
          })
          .catch((error) => {
            console.error('Download URL error:', error);
          });
      }
    );
  };
  // console.log(image);

  return (
    <div className='imgUpload'>
      {imgUrl?(<img
              src={imgUrl}/>):(
                <img
              src={nullProfile}/>
              )}
      <button onClick={handleUpload}>Upload</button>
      <input type="file" onChange={handleChange} />
    </div>
  );
};

export default ImageUploadComponent;
