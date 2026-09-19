//Building a Weather Widget
//using React & Material UI

import WeatherApp from "./WeatherApp";
// import './App.css'

function App() {
  let handleClick = () => {
    console.log("Button wass clicked!");
  };

  return (
    <>
      <WeatherApp />
    </>
  );
}

export default App;
