import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard.js";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ch, setCh] = useState([])

  const [searchTerm, setSearchTerm] = useState("");
 
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
          setCh(response.data.results);
          console.log(response);
          

          
          const results = ch.filter(character1 =>
            character1.name.toLowerCase().includes(searchTerm.toLowerCase())
        );setSearchResults(results)})

          .catch(error => {
            console.error('Server Error', error);
          });

         
        }, [searchTerm]);



        
        
    
  
  
  
  return (
    <section>

    <form>
    <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
    />
    </form>


     {searchResults.map((list,index) => (
       <div key={index}>
         <CharacterCard
         name={list.name}
         status={list.status}
         species={list.species}
         img={list.image}
         />
        
        </div> 
      ))}

      {/* <div>
        <ul>
          {searchResults.map(character => (
            <li key={character}>{character}</li>
          ))}
        </ul>
      </div> */}

    </section>
  );
}



