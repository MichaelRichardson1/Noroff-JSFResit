import React from "react";
import { useState, useEffect } from "react";
import { API } from "../../constants/api";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function Search() {

  const [monsters, setMonsters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(function () {
		async function fetchData() {
			try {
				const response = await fetch(API);

				if (response.ok) {
					const json = await response.json();
					console.log(json);
					setMonsters(json.cards);
				} else {
					setError("A server error occured");
				}
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}
		fetchData();

        const searchedMonsters = fetchData();

        const handleOnSearch = (string, cards) => {
            console.log(string, cards);
          };
        
          const handleOnHover = (card) => {
            console.log(card);
          };
        
          const handleOnSelect = (item) => {
            console.log(item);
          };
        
          const handleOnFocus = () => {
            console.log("Focused");
          };
        
          const handleOnClear = () => {
            console.log("Cleared");
          };
        
          const formatResult = (item) => {
            console.log(item);
            return (
              <div className="result-wrapper">                
                <span className="result-span">name: {item.name}</span>
              </div>
            );
          };

          return (               
                <>
                    <div style={{ marginBottom: 20 }}>Type the name of the Pokemon here</div>
                    <ReactSearchAutocomplete
                        items={searchedMonsters}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        onClear={handleOnClear}
                        styling={{ zIndex: 4 }}
                        formatResult={formatResult}
                        autoFocus />
                </>
                
            
    )}, []);
      
}


export default Search;


