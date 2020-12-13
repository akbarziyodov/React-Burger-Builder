import React from 'react'
import classes from './BurgerControls.css'
import BurgerControl from './BurgerControl/BurgerControl'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const BurgerControls = props => {

    return (
        <div className={classes.BurgerControls}>
            <p>Total Price: <strong>${props.price.toFixed(2)}</strong></p>
            {controls.map((item, i) => {
                return <BurgerControl
                    key={item.label}
                    label={item.label}
                    adder={()=> props.ingredientAdder(item.type)}
                    disabled={props.disabled[item.type]}
                    remover={()=> props.ingredientRemover(item.type)}
                />
            })}
            <button
                disabled={props.purchasable}
                className={classes.OrderButton}
                onClick={props.purchase}
            >ORDER NOW</button>
        </div>
    );
};

export default BurgerControls