import { createContext, useState, useContext } from 'react';

const RestaurantContext = createContext();


export function RestaurantProvider({ children }) {
    const [selectedArea, setSelectedArea] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [current,setCurrent] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');






  return (
    <RestaurantContext.Provider value={{ selectedArea, setSelectedArea, searchResults, setSearchResults, isSearching, setIsSearching,current,setCurrent,selectedOption, setSelectedOption}}>
      {children}
    </RestaurantContext.Provider>
  );
}


export function useRestaurant() {
  return useContext(RestaurantContext);
}