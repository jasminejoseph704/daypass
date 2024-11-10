import React, { useState } from 'react';
import axios from 'axios';

const UploadGym = () => {
  const [gymName, setGymName] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('available');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('gymName', gymName);
    formData.append('price', price);
    formData.append('status', status);

    try {
      const res = await axios.post('/api/gym/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setImageUrl(res.data.imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="upload-gym">
      <h2>Upload Your Gym</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Gym Name:
          <input
            type="text"
            value={gymName}
            onChange={(e) => setGymName(e.target.value)}
            required
          />
        </label>
        <label>
          Price for Day Pass:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <label>
          Status:
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </label>
        <label>
          Upload Image:
          <input type="file" onChange={handleImageChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
      {imageUrl && <p>Image uploaded successfully: <a href={imageUrl} target="_blank" rel="noopener noreferrer">View Image</a></p>}
    </div>
  );
};

export default UploadGym;
