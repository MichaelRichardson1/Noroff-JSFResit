import React from "react";
import { useState, useEffect } from "react";
import { API } from "../../constants/api";
import axios from "axios";
import { Link } from "react-router-dom";

export function Search() {

  const [monsters, setMonsters] = useState([]);
  const [monstersId, setMonsterIds] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect (() => {
    const loadMonsters = async () => {
      const response = await axios.get(API);
      console.log(response.cards.name)
      setMonsters(response.cards.name)
      setMonsterIds(response.cards.id)
    }
    loadMonsters()    
  }, [])

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  }
  const onChangeHandler = (text) => {
    let matches = []
    if (text.length > 0) {
      matches = monsters.filter(monster => {
        const regex = new RegExp(`${text}`, "gi");
        return monster.name.match(regex)
                
      })
    }    
    console.log(matches)
    setSuggestions(matches)
    setText(text)
  }

  return (

    <div className="container">

      <input type="text" className="col-md-12 input" style={{marginTop: 20}} 
      onChange={e => onChangeHandler(e.target.value)} 
      value={text}
      onBlur={() => {
        setTimeout(() => {
          setSuggestions([])
        }, 100);
      }}
      
      />
    
      {suggestions && suggestions.map((suggestion, i) => 
      <Link to={`monster/${monstersId}`}>
        <div key={i} className="col-md-12 justify-content-md-center" 
          onClick={() => onSuggestHandler (suggestion.name)}>{suggestion.name}</div>
      </Link>
      )}
    </div>

  );
  
}

