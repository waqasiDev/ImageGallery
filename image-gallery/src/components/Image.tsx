import React, { useState } from 'react';
import styles from './GridView.module.css';

interface Props {
    imageUrl: string;
    thumbnailUrl: string;
}

const ImagePreview: React.FC<Props> = ({ imageUrl, thumbnailUrl }) => {
    const [showFullImage, setShowFullImage] = useState(false);

    const handlePreviewClick = () => {
        setShowFullImage(true);
    };

    const handleFullImageClick = () => {
        setShowFullImage(false);
    };

    const handleDeleteClick = () => {
        // Handle delete logic here
    };

    return (
        <>
            {!showFullImage ? (
                <div className={styles.thumbnailContainer} onClick={handlePreviewClick}>
                    <img className={styles.thumbnailImage} src={thumbnailUrl} alt="thumbnail preview" />
                </div>
            ) : (
                <div className={styles.fullImageContainer} onClick={handleFullImageClick}>
                    <img className={styles.FullImage} src={imageUrl} alt="full-size image" />
                    <button className={styles.deleteButton} onClick={handleDeleteClick}>
                        Delete
                    </button>
                </div>
            )}
        </>
    );
};

export default ImagePreview;