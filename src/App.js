import React, { useState } from 'react';
import { Camera, CameraResultType } from '@capacitor/camera';
import { defineCustomElements } from '@ionic/pwa-elements/loader';


function CameraApp() {
  const [imageUrl, setImageUrl] = useState(null);

  const takePicture = async () => {
    defineCustomElements(window);

    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });
      setImageUrl(image.webPath);
    } catch (error) {
      console.error('Failed to take picture:', error);
    }
  };

  return (
    <div>
      <h1>Camera App</h1>
      <button onClick={takePicture}>Take Picture</button>
      {imageUrl && (
        <div>
          <h2>Preview</h2>
          <img src={imageUrl} alt="Captured" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default CameraApp;
