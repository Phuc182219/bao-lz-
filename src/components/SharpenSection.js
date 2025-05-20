import React, { useRef, useState } from 'react';
import './SharpenSection.css';

function SharpenSection() {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setSelectedImage(selectedFile);
      
      // Create preview URL
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(selectedFile);
    }
  };

  return (
    <section className="sharpen-section">
      <div className="container">
        <h1>Sharpen Image</h1>
        <p className="description">
          Enhance the details of an image, making edges and textures clearer. 
          It reduces blurriness and makes objects look more well-defined, improving overall sharpness.
        </p>
        
        <div className="image-upload-box" onClick={handleUploadClick}>
          <input 
            type="file" 
            ref={fileInputRef}
            accept="image/*" 
            style={{ display: 'none' }} 
            onChange={handleFileChange}
          />
          {previewUrl ? (
            <img src={previewUrl} alt="Preview" className="image-preview" />
          ) : (
            <>
              <div className="upload-icon">🖼️</div>
              <p>Add An Image</p>
            </>
          )}
        </div>

        <div className="main-actions">
          <button className="btn btn-outline">MORE TEMPLATE</button>
          <button className="btn btn-primary">START!</button>
        </div>
      </div>
    </section>
  );
}

export default SharpenSection; 