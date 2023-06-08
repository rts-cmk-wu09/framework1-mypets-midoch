import React, { useEffect, useState } from "react";
import "../styles/ListPage.css";
import fetchPets from "../API";

const ListPage = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPetsData = async () => {
      try {
        const data = await fetchPets();
        setPets(data);
      } catch (error) {
        console.log("Error fetching pets:", error);
      }
    };

    fetchPetsData();
  }, []);

  return (
    <div className="list-page">
      <h1 className="list-page-title">Available Pets</h1>
      <ul className="pets-list">
        {pets.map((pet) => (
          <li key={pet.id} className="pet-item">
            <img src={pet.image} alt={pet.name} className="pet-image" />
            <div className="pet-details">
              <h2 className="pet-name">{pet.name}</h2>
              <p className="pet-location">{pet.location}</p>
              <p className="pet-description">{pet.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
