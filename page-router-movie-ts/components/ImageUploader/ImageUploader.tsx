import React, { useState, useRef, ChangeEvent } from 'react';
import { IImageUploaderProps } from '@/types/types';

import styles from './ImageUploader.module.css';
import Image from 'next/image';

const ImageUploader: React.FC<IImageUploaderProps> = ({ onImageUpload }) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const imageInput = useRef<HTMLInputElement | null>(null);

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      onImageUpload(JSON.stringify(file));
    }
  };

  const onClickImageUpload = () => {
    imageInput.current?.click();
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
          <Image
            src={uploadedImage}
            alt="업로드된 이미지"
            className={styles['upload-image']}
            width={200}
            height={200}
          />
        </>
      )}
    </div>
  );
};

export default ImageUploader;
