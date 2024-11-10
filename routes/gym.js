const express = require('express');
const multer = require('multer');
const { uploadImageToFirebase } = require('../controllers/uploadController');
const router = express.Router();

// Multer configuration for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to upload an image
router.post('/upload', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  try {
    const imageUrl = await uploadImageToFirebase(req.file);
    res.json({ imageUrl });
  } catch (error) {
    console.error('Error uploading file: ', error);
    res.status(500).send('Error uploading file.');
  }
});

module.exports = router;
