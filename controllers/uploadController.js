const bucket = require('../config/firebase');
const { v4: uuidv4 } = require('uuid');

async function uploadImageToFirebase(file) {
  const blob = bucket.file(`images/${uuidv4()}_${file.originalname}`);
  const blobStream = blob.createWriteStream({
    metadata: {
      contentType: file.mimetype,
    },
  });

  return new Promise((resolve, reject) => {
    blobStream.on('error', reject);
    blobStream.on('finish', async () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      resolve(publicUrl);
    });
    blobStream.end(file.buffer);
  });
}

module.exports = { uploadImageToFirebase };
