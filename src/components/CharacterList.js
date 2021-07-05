import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard.js";
import WelcomePage from "./WelcomePage.js";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  // Setting data downloaded from API
  const [downloadedData, setDownloadedData] = useState([])
  // Setting searched term in form
  const [searchTerm, setSearchTerm] = useState("");
  // Setting results
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          // Setting data downloaded from API
          setDownloadedData(response.data.results);
          console.log(response);
          // Filtering searched word and setting to result
          const results = downloadedData.filter(dataObject =>
            dataObject.name.toLowerCase().includes(searchTerm.toLowerCase())
            );  
          setSearchResults(results)
        })

          .catch(error => {
            console.error('Server Error', error);
          });

         
        }, [searchTerm]);


  return (
    <div>
    <WelcomePage />
    <form>
    <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search Name"
          value={searchTerm}
          onChange={handleChange}
    />
    </form>
     {searchResults.map((list,index) => (
       <div key={index}>
         <CharacterCard
         img={list.image}
         name={list.name}
         status={list.status}
         species={list.species}
         img={list.image}
         />
        </div> 
      ))}
    </div>
  );
}



