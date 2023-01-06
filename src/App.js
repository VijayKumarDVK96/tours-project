import React, { useEffect, useState } from "react";
import Tours from "./components/Tours";
import './App.css';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async() => {
    const response = await fetch(url);
    const tours = await response.json();

    setTours(tours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour}/>
    </main>
  );
};

export default App;