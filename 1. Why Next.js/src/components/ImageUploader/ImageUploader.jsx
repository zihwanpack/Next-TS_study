import { useState, useRef } from 'react';
import styles from './ImageUploader.module.css';
const ImageUploader = ({ onImageUpload }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const imageInput = useRef();

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
    onImageUpload(file);
  };

  const onClickImageUpload = () => {
    imageInput.current.click();
  };
  return (
    <div>
      {!uploadedImage && (
        <>
          <input
            type="file"
            onChange={onChangeImage}
            ref={imageInput}
            className={styles['upload-input']}
          />
          <button
            onClick={onClickImageUpload}
            className={styles['upload-button']}
          >
            이미지 업로드
          </button>
        </>
      )}
      {uploadedImage && (
        <>
          <p>업로드한 이미지</p>
          <img
            src={uploadedImage}
            alt="업로드된 이미지"
            className={styles['upload-image']}
          />
        </>
      )}
    </div>
  );
};

export default ImageUploader;
