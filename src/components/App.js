import React, { useEffect, useState } from 'react';



const App = () => {

  const APP_ID = '343de82d';
  const APP_KEY = '796cc92800c1a1281a1b047885a39830';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    console.log('Effect ran');
    getRecipes();
  }, []);

  const getRecipes = async () => {
    // const response = await fetch(exampleReq);
    // const data = await response.json();
    // console.log(data)
    setRecipes(data.hits)
  }
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Submit</button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}

export default App;
