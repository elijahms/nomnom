import { nomFoods, compFood } from "./consts";
import { useState } from "react";

function App() {
  const [selectedComp, setSelectedComp] = useState(compFood[0]);
  const [selectedNom, setSelectedNom] = useState(nomFoods[0]);

  const FoodSelector = ({ foodOptions, labelText, nom }) => {
    
    function changeSelection(e) {
      let selectedFood = foodOptions.filter(food => food.id - e.target.value === 0)
      nom ? setSelectedNom(selectedFood[0]) : setSelectedComp(selectedFood[0])
    }

    return (
      <div>
        <label>{labelText}</label>
        <select onChange={(e) => changeSelection(e)}>
          {foodOptions.map((food) => (
            <option key={food.id} value={food.id}>
              {food.name}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const FoodDisplay = ({ foodDetails }) => {
    return (
      <div>
        <img
          src={foodDetails.img}
          alt={foodDetails.id}
          height="250"
        />
        <h3>Protein:</h3>
        <h3>{foodDetails.protein}</h3>
        <h3>Fat:</h3>
        <h3>{foodDetails.fat}</h3>
        <h3>Carbohydrate:</h3>
        <h3>{foodDetails.carbohydrate}</h3>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="container food-pickers">
        <div>
          <FoodSelector
            foodOptions={compFood}
            labelText={"Name of dog food brand"}
            nom={false}
          />
        </div>
        <div>
          <FoodSelector
            foodOptions={nomFoods}
            labelText={"Compare with Nom Nom"}
            nom={true}
          />
        </div>
      </div>
      <div className="comparison">
        <div className="nutrition-text">
          <p>
            {selectedComp.name} contains{" "}
            {Math.round((selectedComp.protein / 287) * 100)}% min protein,{" "}
            {Math.round((selectedComp.fat / 300) * 100)}% min fat and has a
            calorie density of XXXXXkcal/kg.
          </p>
        </div>
        <div className="container">
          <div>
            <FoodDisplay foodDetails={selectedComp} />
          </div>
          <div>
            <FoodDisplay foodDetails={selectedNom} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
