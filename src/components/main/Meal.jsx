import React, { useState } from 'react';

const Meal = (props) => {

    // console.log(props.meal);
    const {addIdBtn}=props;
    // console.log(props.meal);
    const {strArea,strIngredient1,idMeal,strMealThumb,}=props.meal;
    // const {handleCart}=props.handleCart;
    // console.log(props.handleCart);
    // console.log(props.handleCart);
    // const [disabled,setDisabled]=useState(true)
    // const [disabled, setDisabled] = useState(false);

    // const onClick = () => {
    //   setDisabled(false);
    // };
    return (
        <div>
            <div className="card w-82 bg-base-100 shadow-xl ">
                <figure><img src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h5>Meal ID :{idMeal}</h5>
                    <h2 className="card-title">{strArea}</h2>
                    <p>{strIngredient1}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>addIdBtn(idMeal)} className="btn btn-primary w-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Meal;