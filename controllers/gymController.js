const GymListing = require('../models/GymListing');
const { uploadImageToFirebase } = require('../controllers/uploadController');

// Create gym listing
async function createGymListing(req, res) {
  const { name, description, price_per_day, status } = req.body;
  const images = [];

  // Handle image uploads
  if (req.files && req.files.length > 0) {
    for (let file of req.files) {
      const imageUrl = await uploadImageToFirebase(file);
      images.push(imageUrl);
    }
  }

  try {
    const gym = await GymListing.create({ name, description, price_per_day, status, images });
    res.status(201).json(gym);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
}

// Update gym status (available/unavailable)
async function updateGymStatus(req, res) {
  const { status } = req.body;

  try {
    const gym = await GymListing.findByPk(req.params.id);
    if (!gym) {
      return res.status(404).json({ error: 'Gym not found' });
    }

    gym.status = status;
    await gym.save();
    res.status(200).json(gym);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
}

// Get all available gym listings
async function getAvailableGyms(req, res) {
  try {
    const gyms = await GymListing.findAll({ where: { status: 'available' } });
    res.status(200).json(gyms);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
}

module.exports = { createGymListing, updateGymStatus, getAvailableGyms };
