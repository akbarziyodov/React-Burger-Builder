import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENTS_COST = {
    salad: 0.3,
    cheese: 0.5,
    bacon: 0.7,
    meat: 1
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
            .map(item => {
                return ingredients[item];
            })
            .reduce((sum,el)=>{
                return sum + el;
            }, 0);
        this.setState({purchasable: sum > 0})
    }

    ingredientAdder = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENTS_COST[type];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngredients)
    };

    ingredientRemover = (type) => {
        const updatedCount = this.state.ingredients[type] - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENTS_COST[type];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngredients)
    };


    modalHandler = () => {
        this.setState({purchasing: true})
    };

    modalHandleCloser = () => {
        this.setState({purchasing: false})
    };

    purchaseContinueHandler = () => {
        alert('You continue!')
    };


    render(){
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <>
                <Modal
                    show={this.state.purchasing}
                    modalCloser={this.modalHandleCloser}
                >
                    <OrderSummary
                        totalPrice={this.state.totalPrice}
                        continueHandler={this.purchaseContinueHandler}
                        cancelHandler={this.modalHandleCloser}
                        ingredients={this.state.ingredients}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls
                    ingredientAdder={this.ingredientAdder}
                    ingredientRemover={this.ingredientRemover}
                    disabled={disabledInfo}
                    purchasable={!this.state.purchasable}
                    price={this.state.totalPrice}
                    purchase={this.modalHandler}
                />
            </>
        )
    }
}

export default BurgerBuilder