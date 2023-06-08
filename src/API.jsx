import axios from "axios";

const API_KEY = "AydLMe7AV8wzL4L91AWEvphShFp1QFjtjZdGO4ihh5CJ2a3Hzd";

const fetchPets = async () => {
  try {
    const response = await axios.get("https://api.petfinder.com/v2/animals", {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    const data = response.data;
    console.log("Fetched pets data:", data);
    return data.animals;
  } catch (error) {
    console.log("Error fetching pets:", error);
    throw error;
  }
};

export default fetchPets;
