import React from 'react'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey=>{
            return(
                <li key={igKey}>
                    <span style={{textTransfor: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        });

    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: $<b>{props.totalPrice}</b></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.cancelHandler} btnType='Danger'>CANCEL</Button>
            <Button clicked={props.continueHandler} btnType='Success'>CONTINUE</Button>
        </>
    )
};

export default orderSummary