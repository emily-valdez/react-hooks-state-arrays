import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy]= useState("All)")

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  function handleLiClick(id) {
    const newFoodArray = foods.map((food) =>{
    if (food.id !== id) {
      return{
        ...food, 
        heatLevel: food.heatLevel + 1,
      };
      }else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }

  function handleFilterChange(event){
    setFilterBy(event.target.value);
    }

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={()=> handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
        <button onClick={handleAddFood}>Add New Food</button>
        <ul>{foodList}</ul>
    </div>
  );
  }
export default SpicyFoodList;


// adding a new spicy food to the array when the button is clicked.
//React will only update state if a new object is passed to setState.
// That means it's important to keep in mind which array methods mutate arrays, and which can be used to make copies of arrays.

// For this deliverable, the goal is to create a new copy of the array which includes all the elements of the original array, plus a new element.



