// import './App.css';
// import { useState } from 'react';
// import Welcome from './Welcome.js';
// function App() {
//   const [userName, setUserName] = useState("");



//   const handleClick = () => {
//     setUserName("Rico Suave")
//   }
//   return (
//     <div className="App">
//        <Welcome sayHi={userName} />
//       <p>ehhhh {userName}</p>
//       <button onClick={handleClick} > My name is Giovanni Giorgio... but everybody calls me Giorgio</button>
  
//     </div>
//   );
// }

// export default App;










import { useState } from 'react';
import FeaturedParks from './FeaturedParks.js';
import './App.css';


function App() {
  
const [parksList, setParksList] = useState (["Sunnybrooke", "Trinity Bellwoods", "Cherry Beach", "Riverdale", "Tobermory"]);

const removePark = (nameOfParkToRemove) => {
  // make a copy of a stateful array
  const copyOfParksList = [...parksList];
  // next iterate a loop through that copy of our array looking for the part we want to remove, we want a new array that contains all parks, EXCEPT the one we want to remove
  const newArray = copyOfParksList.filter( (parkStrang) => {
    return parkStrang !== nameOfParkToRemove;
  });
// console.log(newArray);
//   console.log(nameOfParkToRemove);
setParksList(newArray);
}

  return(
      <div className="App">
          {/* <button onClick={removePark}></button> */}
          <h1>Parks</h1>
          <p>holaaa</p>
          {
          // condition-goes-here ? return-this-if-true : return-this-if-false
          parksList.length > 0
          ? <h3>Look at these parks</h3>
          : <p>damn too much bruv</p>

          }
          {
            parksList.map( (individualPark, index) => {
              return (
                <FeaturedParks 
                key={index}
                parkName= {individualPark} 
                bulldozer={removePark}
                />
              )
            })
          }
          {/* <FeaturedParks parkName={ parksList[0] } />
          <FeaturedParks parkName={ parksList[1] } />
          <FeaturedParks parkName={ parksList[2] } /> */}
      </div>
  );
}
export default App;



