import React, { useEffect, useState } from 'react';
import Meal from './Meal';

const Main = ({addIdBtn}) => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    // console.log(setMeals);

    useEffect( () =>{
        // const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=a`;


        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [searchText])

    // const searchFood = e =>{
    //     setSearchText(e.target.value);
    //}
    const handleCart=()=>{
        console.log("meal");
    }
    return (

        <div  className='grid md:grid-cols-3 gap-1'>
           {
            meals.map(meal=><Meal 
                key={meal.idMeal}
                meal={meal}
                addIdBtn={addIdBtn}
            ></Meal>)
           }
        </div>
    );
};

export default Main;