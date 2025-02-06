// geocodingController.js
const axios = require("axios");

// Function to get coordinates for a given address
exports.getCoordinates = async (req, res) => {
  const { address } = req.params;

  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search`,
      {
        params: {
          q: address,
          format: "json",
          addressdetails: 1,
          limit: 1,
        },
      }
    );

    if (response.data.length === 0) {
      return res.status(404).json({ message: "No results found" });
    }

    const { lat, lon } = response.data[0];
    res.status(200).json({ latitude: lat, longitude: lon });
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    res.status(500).json({ message: "Failed to fetch coordinates" });
  }
};
