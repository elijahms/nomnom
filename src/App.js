import { nomFoods, compFood } from "./consts";
import { useState } from "react";
import FoodSelector from "./FoodSelector";

function App() {
  const [selectedComp, setSelectedComp] = useState(compFood[0]);
  const [selectedNom, setSelectedNom] = useState(nomFoods[0]);

  const FoodDisplay = ({ foodDetails }) => {
    return (
      <div>
        <img src={foodDetails.img} alt={foodDetails.id} height="250" />
        <div style={{ fontSize: "1.5rem" }}>
          <h3>Protein: {foodDetails.protein}</h3>
          <h3>Fat: {foodDetails.fat}</h3>
          <h3>Carbohydrate: {foodDetails.carbohydrate}</h3>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <div>
        <img
          height="80"
          alt="logo"
          src="https://www.nomnomnow.com/images/logo/nom_nom_straight.svg"
        />
      </div>
      <div>
        <h1 style={{ color: "#e6a65d" }}>COMPARISON CALCULATOR</h1>
      </div>
      <div className="container food-pickers">
        <div>
          <FoodSelector
            foodOptions={compFood}
            labelText={"Name of dog food brand"}
            nom={false}
            setSelectedNom={setSelectedNom}
            setSelectedComp={setSelectedComp}
          />
        </div>
        <div>
          <FoodSelector
            foodOptions={nomFoods}
            labelText={"Compare with Nom Nom"}
            nom={true}
            setSelectedNom={setSelectedNom}
            setSelectedComp={setSelectedComp}
          />
        </div>
      </div>
      <div className="comparison">
        <div className="nutrition-text">
          <h3>
            {selectedComp.name} contains{" "}
            {Math.round((selectedComp.protein / 287) * 100)}% min protein,{" "}
            {Math.round((selectedComp.fat / 300) * 100)}% min fat and has a
            calorie density of {selectedComp.kcal}kcal/kg.
          </h3>
        </div>
        <div className="container">
          <div className="comp-food-details">
            <FoodDisplay foodDetails={selectedComp} />
          </div>
          <div className="nom-food-details">
            <FoodDisplay foodDetails={selectedNom} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
