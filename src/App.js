import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import CharacterCard from "./components/CharacterCard.js";
import WelcomePage from "./components/WelcomePage.js";

export default function App() {

  return (
    <main>
      <Link to="/">Home</Link>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Link to="/characters">Search Page</Link>
    </main>
  );
}
