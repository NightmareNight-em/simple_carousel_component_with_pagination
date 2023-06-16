import './App.css';
import { Slider } from './components/slider';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

  //get slides from backend api endpoint
  const [slides, setSlides] = useState([]);
  const getSlides = async () => {
    const response = await axios.get(`http://localhost:8080/fetchData`);
    setSlides(response?.data);
  };
  useEffect(() => {
    getSlides();
  }, []);

  return (
      <Slider slides={slides}/>
  );
}

export default App;