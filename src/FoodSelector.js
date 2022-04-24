import { useState } from "react";

const FoodSelector = ({
  foodOptions,
  labelText,
  nom,
  setSelectedNom,
  setSelectedComp,
}) => {
  const [selectValue, setSelectValue] = useState(foodOptions[0]);
    
  // When the select value is changed look for the correct object based on id and set the correct state to the selected object
  function changeSelection(e) {
    setSelectValue(e.target.value);
    let selectedFood = foodOptions.filter(
      (food) => food.id - e.target.value === 0
    );
    nom ? setSelectedNom(selectedFood[0]) : setSelectedComp(selectedFood[0]);
  }

  return (
    <div>
      <label>{labelText}</label>
      <select value={selectValue} onChange={(e) => changeSelection(e)}>
        {foodOptions.map((food) => (
          <option key={food.id} value={food.id}>
            {food.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FoodSelector;
