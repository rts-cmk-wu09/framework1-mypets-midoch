import axios from "axios";

const API_KEY = "AydLMe7AV8wzL4L91AWEvphShFp1QFjtjZdGO4ihh5CJ2a3Hzd"; // Replace with your actual Petfinder API key
const API_SECRET = "Hm309TbhLlfaGhxE9XkwCE8aLWaQdOtTSRfh0IwF"; // Replace with your actual Petfinder API secret

// Get a list of pets
export const getPets = async (type) => {
  try {
    const response = await axios.get(
      `https://api.petfinder.com/v2/animals?type=${type}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}:${API_SECRET}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching pets:", error);
    throw error;
  }
};
