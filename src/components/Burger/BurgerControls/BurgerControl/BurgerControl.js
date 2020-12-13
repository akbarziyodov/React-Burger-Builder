import React from 'react'
import classes from './BurgerControl.css'

const burgerControl = props => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button
                onClick={props.remover}
                className={classes.Less}
                disabled={props.disabled}
            >Less</button>
            <button
                onClick={props.adder}
                className={classes.More}
            >More</button>
        </div>
    );
};

export default burgerControl