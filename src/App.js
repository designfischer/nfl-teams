import React, { useState, useEffect } from 'react';

import './App.css';

import Card from './components/card/Card'
import Search from './components/search/Search'

import teams from './nflTeams'

function createCard(team){
  return (
    <Card 
      key={team.id}
      logo={team.logo}
      name={team.name} 
      city={team.city}
      state={team.state}      
      maincolor={team.maincolor}
      conference={team.conference}
      division={team.division}
    />
  );
}

function App() {

  const [searchTeamByName, setSearchTeamByName] = useState('');  
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {    
    const results = teams.filter(team => team.name.toLowerCase().includes(searchTeamByName));    
    setSearchResults(results);
  }, [searchTeamByName]);  

  return (
    <div className="container">     
      <div className="search-inputs">
        <img className="nfl-logo" src="https://upload.wikimedia.org/wikipedia/pt/2/25/National_Football_League_2008.svg.png" alt="nfl"/>        
        <Search teamValue={searchTeamByName} teamOnChange={e => setSearchTeamByName(e.target.value)} placeholder={"Pesquisar por nome"}/>        
      </div>             
      <div className="header-container">       
        <div className="cards">
          {searchResults.map(createCard)}        
        </div>
        <p>Desenvolvido por <a href="www.designfischer.com">Rafael Fischer</a></p>      
      </div>
    </div>
  );
}

export default App;
